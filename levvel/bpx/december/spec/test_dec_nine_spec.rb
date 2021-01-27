require 'spec_helper'


RSpec.describe Card do

    def card(params = {})
        defaults = {
            suit: :hearts,
            rank: 7,
        }
        Card.build(*defaults.merge(params).values_at(:suit, :rank))
    end

    it 'has a suit' do
        raise unless card(suit: :spades).suit == :spades
    end

    it 'has a rank' do
        raise unless card(rank: 4).rank == 4
    end

    context 'equality' do
        subject { card(suit: :spades, rank: 4) }
        let(:other) { card(suit: :spades, rank: 4) }


        describe 'comparing against self' do

            it 'is equal to itself' do

                raise unless subject == other
            end
            it 'is hash equal to itself' do
                raise unless Set.new([subject, other]).size == 1
            end
        end

        shared_examples_for 'an unequal card' do

            it 'is not equal' do
                raise unless subject != other
            end
            it 'is not hash equal' do
                raise unless Set.new([subject, other]).size == 2
            end
        end

        describe 'comparing a card of different suit' do
            let(:other) { card(suit: :hearts, rank: 5) }
            it_behaves_like 'an unequal card'
        end

        describe 'comparing a card of different rank' do
            let(:other) { card(suit: :spades, rank: 5) }
            it_behaves_like 'an unequal card'
        end
    end

    describe 'A queen' do
        it 'rankshigher than a jack' do
            lower = card(rank: :jack)
            higher = card(rank: :queen)
            raise unless higher.rank > lower.rank
        end
    end

    describe 'A jack' do
        it 'has a rank higher than 10' do
            lower = card(rank: 10)
            higher = card(rank: :jack)
            raise unless higher.rank > lower.rank
        end
    end

    describe 'an array ' do
        def build_array(*args)
            [*args]
        end
        puts self
        puts self.class
        
        it 'has a length' do
            raise unless build_array("a").length == 1
        end

        it 'has a first element' do
            raise unless build_array("a").first == "a"
        end
end


