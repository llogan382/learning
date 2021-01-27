doc = File.open("input.xml") { |f| Nokogiri::XML(f) }
puts doc