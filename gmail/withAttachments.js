function mailService(){
  const quotaVal = MailApp.getRemainingDailyQuota();
  Logger.log(quotaVal);
}
 
function sendMyEmail1(){
  const email = Session.getActiveUser().getEmail();
  Logger.log(email);
  const subject = 'Test Email';
  const html = '<h1>Hello World</h1>'
  const obj = {
    to:email,
    subject:subject,
    htmlBody:html};
  MailApp.sendEmail(obj);
}
 
function sendMyEmail3(){
  const email = Session.getActiveUser().getEmail();
  const subject = 'Test Email Attachment 3';
  const html = '<h1>Hello World</h1>'
  const id = '1pBcphLBsVcps0nsrAjH6bo8HvV4T1dS1';
  const file = DriveApp.getFileById(id);
  const opts = {
    name:'My File',
    cc:email,
    noReply: true,
    replyTo: 'test@gmail.com',
    htmlBody:html,
    attachments:[file.getAs(MimeType.PDF)]};
  MailApp.sendEmail(email,subject,'',opts);
}