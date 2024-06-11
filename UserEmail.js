const emailApp = {
    mailboxes: {
      inbox: [
        {
          id: 1,
          sender: { name: 'Alice', email: 'alice@example.com' },
          receiver: { name: 'Me', email: 'me@example.com' },
          subject: 'Meeting Reminder',
          body: "Don't forget our meeting at 3 PM.",
          date: '2024-06-11',
          status: 'unread'
        },
        {
          id: 2,
          sender: { name: 'Bob', email: 'bob@example.com' },
          receiver: { name: 'Me', email: 'me@example.com' },
          subject: 'Lunch Plans',
          body: 'Are we still on for lunch tomorrow?',
          date: '2024-06-10',
          status: 'read'
        }
      ],
      junk: [],
      sent: [],
      drafts: []
    },
    contacts: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' }
    ],
    emails: [
      {
        id: 1,
        sender: { name: 'Alice', email: 'alice@example.com' },
        receiver: { name: 'Me', email: 'me@example.com' },
        subject: 'Meeting Reminder',
        body: "Don’t forget our meeting at 3 PM.",
        date: '2024-06-11',
        status: 'unread'
      },
      {
        id: 2,
        sender: { name: 'Bob', email: 'bob@example.com' },
        receiver: { name: 'Me', email: 'me@example.com' },
        subject: 'Lunch Plans',
        body: 'Are we still on for lunch tomorrow?',
        date: '2024-06-10',
        status: 'read'
      }
    ]
  };
  
  
  const mailboxNames = Object.keys(emailApp.mailboxes);
  console.log(mailboxNames);
  

  const allEmails = emailApp.emails;
  console.log(allEmails);
  
 
  const secondEmailText = emailApp.mailboxes.inbox[1].body;
  console.log(secondEmailText);
  

  function markEmailAsSent(emailId) {
    const emailIndex = emailApp.mailboxes.drafts.findIndex(email => email.id === emailId);
    if (emailIndex !== -1) {
      const email = emailApp.mailboxes.drafts.splice(emailIndex, 1)[0];
      email.status = 'sent';
      emailApp.mailboxes.sent.push(email);
    }
  }
  markEmailAsSent(1); 
  console.log(emailApp.mailboxes.sent);
  
  const newDraft = {
    id: 3,
    sender: { name: 'Me', email: 'me@example.com' },
    receiver: { name: 'Charlie', email: 'charlie@example.com' },
    subject: 'Draft Email',
    body: 'This is a draft email.',
    date: '2024-06-11',
    status: 'draft'
  };
  emailApp.mailboxes.drafts.push(newDraft);
  console.log(emailApp.mailboxes.drafts);
  