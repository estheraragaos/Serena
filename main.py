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
    'Oi! Eu me chamo Serena, a assistente que vai mudar sua relação com o Serasa e deixar sua vida financeira do meu jeitinho: Serena!  E vc?',
    'Eu me chamo',
    'Prazer em te conhecer',
    'Preciso de ajuda',
    'Em que posso te ajudar?',
    'Quero controlar meus gastos'

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