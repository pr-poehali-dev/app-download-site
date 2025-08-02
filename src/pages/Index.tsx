import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const WeChat = () => {
  const [activeTab, setActiveTab] = useState('chats');
  const [messageText, setMessageText] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Анна Петрова',
      lastMessage: 'Привет! Как дела?',
      time: '14:30',
      unread: 2,
      avatar: 'AP',
      online: true
    },
    {
      id: 2,
      name: 'Команда проекта',
      lastMessage: 'Встреча в 15:00',
      time: '13:45',
      unread: 0,
      avatar: 'КП',
      online: false
    },
    {
      id: 3,
      name: 'Михаил Иванов',
      lastMessage: 'Отправил файл',
      time: '12:20',
      unread: 1,
      avatar: 'МИ',
      online: true
    }
  ];

  const contacts = [
    { id: 1, name: 'Анна Петрова', phone: '+7 (999) 123-45-67', avatar: 'АП' },
    { id: 2, name: 'Михаил Иванов', phone: '+7 (999) 876-54-32', avatar: 'МИ' },
    { id: 3, name: 'Елена Смирнова', phone: '+7 (999) 555-66-77', avatar: 'ЕС' }
  ];

  const calls = [
    { id: 1, name: 'Анна Петрова', type: 'video', time: '14:30', status: 'incoming' },
    { id: 2, name: 'Команда проекта', type: 'audio', time: '13:15', status: 'missed' },
    { id: 3, name: 'Михаил Иванов', type: 'video', time: '11:45', status: 'outgoing' }
  ];

  const messages = [
    { id: 1, text: 'Привет! Как дела?', sender: 'other', time: '14:30' },
    { id: 2, text: 'Отлично! А у тебя как?', sender: 'me', time: '14:31' },
    { id: 3, text: 'Тоже хорошо! Планы на выходные есть?', sender: 'other', time: '14:32' }
  ];

  const renderChats = () => (
    <div className="space-y-2 p-4">
      {chats.map((chat) => (
        <Card key={chat.id} className="p-4 hover:bg-accent/50 transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-sf-pro">
                  {chat.avatar}
                </AvatarFallback>
              </Avatar>
              {chat.online && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-sf-pro font-semibold text-foreground truncate">{chat.name}</h3>
                <span className="text-sm text-muted-foreground">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <Badge className="bg-primary text-white rounded-full min-w-[20px] h-5 text-xs">
                    {chat.unread}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-2 p-4">
      {contacts.map((contact) => (
        <Card key={contact.id} className="p-4 hover:bg-accent/50 transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-sf-pro">
                {contact.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-sf-pro font-semibold text-foreground">{contact.name}</h3>
              <p className="text-sm text-muted-foreground">{contact.phone}</p>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="p-2">
                <Icon name="Phone" size={16} />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Icon name="Video" size={16} />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderCalls = () => (
    <div className="space-y-2 p-4">
      {calls.map((call) => (
        <Card key={call.id} className="p-4 hover:bg-accent/50 transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-accent">
              <Icon 
                name={call.type === 'video' ? 'Video' : 'Phone'} 
                size={20} 
                className={call.status === 'missed' ? 'text-destructive' : 'text-primary'}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-sf-pro font-semibold text-foreground">{call.name}</h3>
              <div className="flex items-center space-x-2">
                <Icon 
                  name={call.status === 'incoming' ? 'ArrowDownLeft' : call.status === 'outgoing' ? 'ArrowUpRight' : 'PhoneOff'} 
                  size={14} 
                  className="text-muted-foreground"
                />
                <span className="text-sm text-muted-foreground">{call.time}</span>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="p-2">
              <Icon name="Phone" size={16} className="text-primary" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderProfile = () => (
    <div className="p-6">
      <div className="text-center mb-8">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-sf-pro text-2xl">
            ВП
          </AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-sf-pro font-bold text-foreground">Владимир Петров</h2>
        <p className="text-muted-foreground">@vladimir_p</p>
      </div>

      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={20} className="text-muted-foreground" />
            <span className="font-sf-text">+7 (999) 123-45-67</span>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={20} className="text-muted-foreground" />
            <span className="font-sf-text">vladimir@example.com</span>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Bell" size={20} className="text-muted-foreground" />
              <span className="font-sf-text">Уведомления</span>
            </div>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Settings" size={20} className="text-muted-foreground" />
              <span className="font-sf-text">Настройки</span>
            </div>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          </div>
        </Card>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-card">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => setActiveTab('chats')}>
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-sf-pro">
              АП
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-sf-pro font-semibold">Анна Петрова</h3>
            <p className="text-sm text-muted-foreground">в сети</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
              <Icon name="Phone" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Video" size={20} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'me'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground'
              }`}
            >
              <p className="font-sf-text">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'me' ? 'text-white/70' : 'text-muted-foreground'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-card">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Icon name="Plus" size={20} />
          </Button>
          <Input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Написать сообщение..."
            className="flex-1"
          />
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Icon name="Send" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );

  if (activeTab === 'chat') {
    return (
      <div className="h-screen bg-background">
        {renderChat()}
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="p-4 border-b bg-sky-700">
        <h1 className="text-2xl font-sf-pro font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          WeChat
        </h1>
      </div>

      <div className="flex-1 overflow-hidden bg-slate-100">
        {activeTab === 'chats' && renderChats()}
        {activeTab === 'contacts' && renderContacts()}
        {activeTab === 'calls' && renderCalls()}
        {activeTab === 'profile' && renderProfile()}
      </div>

      <div className="border-t p-2 bg-emerald-100">
        <div className="flex justify-around">
          <Button
            variant={activeTab === 'chats' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('chats')}
            className="flex-col space-y-1 h-auto py-2"
          >
            <Icon name="MessageCircle" size={20} />
            <span className="text-xs font-sf-text">Чаты</span>
          </Button>

          <Button
            variant={activeTab === 'contacts' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('contacts')}
            className="flex-col space-y-1 h-auto py-2"
          >
            <Icon name="Users" size={20} />
            <span className="text-xs font-sf-text">Контакты</span>
          </Button>

          <Button
            variant={activeTab === 'calls' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('calls')}
            className="flex-col space-y-1 h-auto py-2"
          >
            <Icon name="Phone" size={20} />
            <span className="text-xs font-sf-text">Звонки</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('chat')}
            className="flex-col space-y-1 h-auto py-2"
          >
            <Icon name="Video" size={20} />
            <span className="text-xs font-sf-text">Видео</span>
          </Button>

          <Button
            variant={activeTab === 'profile' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('profile')}
            className="flex-col space-y-1 h-auto py-2"
          >
            <Icon name="User" size={20} />
            <span className="text-xs font-sf-text">Профиль</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeChat;