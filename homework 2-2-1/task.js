function chatHandler() {
     const chatWidget = document.querySelector('.chat-widget');
     const input = document.getElementById('chat-widget__input');
     const messages = document.querySelector( '.chat-widget__messages' );
     const widgetMessages = document.querySelector('.chat-widget__messages-container');
     let timer=0;
     const respons = ['Добрый день','Чем я могу вам помочь?!','У вас какие-то проблемы?', 'Подождите 5 минут','Я думаю, вам стоит поговорить с другим ботом','Я не могу пригласить администратора, хотя это решило бы ваш вопрос'];
     
     chatWidget.addEventListener('click',()=>{
         chatWidget.classList.add('chat-widget_active');
         setInterval(()=>{
             if(timer === 30) {
                 let hours = new Date().getHours();
                 let minutes = new Date().getMinutes();
                 if (hours < 10) hours = '0' + hours;
                 if (minutes<10) minutes = '0' + minutes;
                 let time = hours + ':' + minutes;
                 messages.innerHTML += `
                 <div class="message">
                     <div class="message__time">${time}</div>
                     <div class="message__text">${respons[Math.round(Math.random()*5)]}</div>
                 </div>`;
                 timer = 0;
             }else{
                 timer++;
             }         
         },1000);
     });
 
     input.addEventListener('keydown',(event)=>{
         if(event.key === 'Enter' && input.value.length != 0){
             timer = 0;
             let text = input.value;
             let hours = new Date().getHours();
             let minutes = new Date().getMinutes();
             if (hours < 10) hours = '0' + hours;
             if (minutes<10) minutes = '0' + minutes;
             let time = hours + ':' + minutes;
             messages.innerHTML += `
             <div class="message message_client">
                 <div class="message__time">${time}</div>
                 <div class="message__text">${text}</div>
             </div>`;
 
             input.value = '';
             messages.innerHTML += `
             <div class="message">
                 <div class="message__time">${time}</div>
                 <div class="message__text">${respons[Math.round(Math.random()*5)]}</div>
             </div>`;
 
             widgetMessages.scrollTop = widgetMessages.scrollHeight;
             widgetMessages.style.overflow = 'hidden';
         
         }
         
     });
 
 }
 
 chatHandler();