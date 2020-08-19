from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
bot = ChatBot('Serena')

conversa = ListTrainer(bot)
conversa.train([
    'Oi',
    'Qual seu nome?',
    'Gabriele',
    'Oi! Eu me chamo Serena, a assistente que vai mudar sua relação com o Serasa e deixar sua vida financeira do meu jeitinho: Serena! Como posso começar a te ajudar?',
    'Oi, quero consultar meu CPF',
    'Claro! Digite o número do CPF sem pontos, vírgulas ou hífens, por favor!'
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