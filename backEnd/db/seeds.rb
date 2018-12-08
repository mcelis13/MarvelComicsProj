# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'
require 'byebug'
require './config/ENV/keys.rb'

publicKey = ENV(keys['PUBLIC_KEY']);
privateKey = ENV(keys['PRIVATE_KEY']);

timestamp = Time.now


md5 = Digest::MD5.new
md5 << timestamp.to_s
md5 << privateKey
md5 << publicKey

hash = md5.hexdigest
puts hash

character_data = RestClient.get("https://gateway.marvel.com:443/v1/public/characters?ts=#{timestamp}&apikey=#{publicKey}&hash=#{hash}")
characters = JSON.parse(character_data)

characters["data"]["results"].each do |character|
  char_name = character['name']
  char_thumbnail = "#{character['thumbnail']['path']}.#{character['thumbnail']['extension']}"
  char_desc = character['description']
  Character.create(name: char_name, description: char_desc, thumbnail: char_thumbnail)
end

comic_data = RestClient.get("https://gateway.marvel.com:443/v1/public/comics?ts=#{timestamp}&apikey=#{publicKey}&hash=#{hash}")
comics = JSON.parse(comic_data)

 comics['data']['results'].each do |comic|
   comic_name = comic['title']
   comic_img = "#{comic['thumbnail']['path']}.#{comic['thumbnail']['extension']}"
   comic_description = comic['description']
   comic_page_count = comic['pageCount']
   comic_price = comic['prices'][0]['price']

   Comic.create(title: comic_name, description: comic_description, page_count: comic_page_count, price: comic_price, img: comic_img)
 end
