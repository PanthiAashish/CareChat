'use client';
import {useChat} from 'ai/react'

export default function Chat() {
  const {messages, input, handleInputChange, handleSubmit} = useChat();
  
  return (
    <div className='chatContainer'>
      <div className='messageContainer'>
        {
          messages.map(m => (
            <div key = {m.id} className={m.role === 'assistant' ? 'systemMessage' : 'userMessage'} >
              <div className='messageContent'> {m.content} </div>
              </div>
          ))
        }

      <form onSubmit={handleSubmit} className="inputForm" >
          <input value={input} onChange={handleInputChange} placeholder="What problem are you facing?" className="inputField">

          </input>
      </form>
      </div>
    </div>
  );
}


// pandas for dataframe and numpy data rays