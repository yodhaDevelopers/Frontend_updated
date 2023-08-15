from transformers import GPT2Tokenizer, GPT2LMHeadModel

tokenizer = GPT2Tokenizer.from_pretrained('gpt2-large', padding_side='left')

model = GPT2LMHeadModel.from_pretrained('gpt2-large', pad_token_id=tokenizer.eos_token_id)


#tokenizer.eos_token_id
print("Bot: Hello! Let's start the conversation. Type 'exit' to leave the conversation.")
tokenizer.decode(tokenizer.eos_token_id)

def get_response(msg):
    sentence = msg
    numeric_ids = tokenizer.encode(sentence, return_tensors = 'pt')
    tokenizer.decode(numeric_ids[0][3])
    result = model.generate(numeric_ids, max_length = 100, num_beams=5, no_repeat_ngram_size=2, early_stopping=True)
    generated_text = tokenizer.decode(result[0], skip_special_tokens=True)
    print(generated_text)

# history = []
# print("Bot: Hello! Let's start the conversation. Type 'exit' to leave the conversation.")

# while True:
#     user_input = input("User: ")


#     # append the new user input to the chat history
#     history.append(user_input)
#     history.append('\n')

#     if user_input.lower() == 'exit':
#         print("I hope you liked my outfit recommendations! Adios!")
#         break

#     # encode the new user input, add the eos_token and return a tensor in Pytorch
#     new_user_input_ids = tokenizer.encode(user_input, return_tensors='pt')

#     # Now with the new user input , generate a output from the model
#     bot_output = model.generate(new_user_input_ids, max_length=150, num_beams=2, no_repeat_ngram_size=2, early_stopping=True)

#     # Converting bot output which is in id format  to text
#     bot_output = tokenizer.decode(bot_output[0], skip_special_tokens=True)

#     print("Bot: ",bot_output)





    
