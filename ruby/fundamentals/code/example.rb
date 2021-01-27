def classic_jazz?(album)
    album[2] == "Jazz" and album[3].to_i.between?(1950, 1959)
end



albums.select {|album| album[2] == "Jazz" and album[3].to_i.between?(1950, 1959)}