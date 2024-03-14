import telebot
bot = telebot.TeleBot('7186983100:AAGh11bK7Fj8qoQ--rwkdvrjWEOmD9j9VtE')
@bot.message_handler(commands=['start'])
def start(message):
name = str(message.@w3schools_combot.w3.schools)
bot.send_message(message.from_user.id ,'Salom ' + name)
#bu yerda user /start bosganda Isminmi olib Salom qowb yuboradi
#message bu json telegram server bizga xabarda json api yuboradi uni ichida userga tegishli #barcha narsa bor
@bot.message_handler(content_types=['text'])
def send(message):
text = message.text
if text == 'Python':
bot.send_message(message.from_user.id , 'Salom Python Programist')
elif text == 'Java':
bot.send_message(message.from_user.id , 'Salom Java Programist')
elif text == 'Php':
bot.send_message(message.from_user.id , 'Salom Php Programist')
elif text == 'Salom men bu':
bot.send_message(message.from_user.id , 'Salom C# Programist')
else:
bot.send_message(message.from_user.id , 'Uzur men sizi tanimayaman 😑😂')
bot.polling(none_stop= True) # bu botimiz ochib qolmasligi uchun!