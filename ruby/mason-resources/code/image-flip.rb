class ImageFlipper
    def initialize(image_processor)
      @image_processor = image_processor
    end

    def flip(file_name)
      @image_processor.flip(file_name)
    end
  end

RSpec.describe "ImageFlipper" do
    it "calls the flip method with the correct arguments" do
      mock = double("mini_magick")
      expect(mock).to receive(:flip).with("ruby.jpg")
      img = ImageFlipper.new(mock)
      img.flip("ruby.jpg")
    end
  end