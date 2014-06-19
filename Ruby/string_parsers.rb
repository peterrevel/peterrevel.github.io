# do to all event titles
def presearch_cleanse(keyWord)
	keyWordArray = keyWord.split(" ")
	#get rid of dates & times
	keyWordArray.each do |string|
		if (string.include? "/" or string.include? "-" or string.include? ":") and string =~ /\d/
			keyWord.sub! string, ""
		end
	end
	#get rid of bad search characters
	replaceList = ["-", "/", ",", ".", "&", ":", "(", ")", "@", "?", "!", "+", "~"]
	replaceList.each do |badString|
		keyWord.gsub! badString, " "
	end
	return keyWord
end

# do only after Bing return bad or no images
def postsearch_cleanse(keyWord)
	keyWordArray = keyWord.split(" ")
	keyWordArray = keyWordArray.sort {|x, y| y.length <=> x.length}
	maxIndex = 4
	tempKeyword = ""
	keyWordArray.each do |string|
		if maxIndex == 0
			break
		end
		tempKeyword += (" " + string)
		maxIndex -= 1
	end
	return tempKeyword
end

if __FILE__ == $0
	puts "---start--"
	keywords = ["Saturday San Jose/Campbell Pick-Up Soccer 9:30 AM at John Morgan Park", 
				"Swim Level 4-Seal Summer Sat 1 (9:55)", 
				"Tennis - Intermediate - Ages 15+", 
				"Saturday afternoon Soccer - Alameda (Washington Park) 2 PM"]
	keywords.each do |keyword|
		keyword = presearch_cleanse(keyword)
		puts keyword
	end
	puts "--post cleanse---"
	keywords.each do |keyword|
		keyword = postsearch_cleanse(keyword)
		puts keyword
	end
	puts "---end----"
end