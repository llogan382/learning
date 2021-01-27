
TEXT_FILE = "bible.txt"
REFERENCE_TEXT_FILE = "dummy.txt"



def word_from_file(text_file)

    File.read(text_file).downcase.gsub(/[^a-z]/, " ").split
rescue
    puts "Gieve me #{text_file} and try again"
    exit
end


words = word_from_file(TEXT_FILE)
words_to_remove = word_from_file(REFERENCE_TEXT_FILE).uniq

words_to_remove.each do |word |
    words.delete word
end

WORD_COUNT = {}
words.each do |w|
    WORD_COUNT[w] = 0 unless WORD_COUNT[w]
    WORD_COUNT[w] += 1
end

WORD_COUNT.sort_by {|word, count| count }.reverse
