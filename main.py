from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
bot = ChatBot('Serena')
bot = ChatBot(
    'Serena',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    database_uri='sqlite:///database.sqlite3'
    )
    
conversa = ListTrainer(bot)
conversa.train([
    'Oi!',
    'Como vc está?',
    'Tudo bem e vc?',
    'Ótima!',
    'Me fale seu nome!',
    'Eu me chamo Serena, e vc?',
    'Prazer em te conhecer',
    'Em que posso te ajuda?',
    'Quero controlar meus gastos',
    'Fique tranquilo que te trarei toda minha serenidade!'

])
while True:
    try:
        resposta = bot.get_response(input("Usuário: "))
        if float(resposta.confidence) > 0.5:
            print("Serena: ", resposta)
        else:
            print("Eu não entendi :(")
    except(KeyboardInterrupt, EOFError, SystemExit):
        break