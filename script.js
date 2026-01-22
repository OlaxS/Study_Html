document.getElementById('burger-menu').addEventListener('click', () => {
	document.getElementById('opened-burger-menu').style.width = '40%'
})
document.getElementById('closing-button').addEventListener('click', () => {
	document.getElementById('opened-burger-menu').style.width = '0%'
})

document.getElementById('bot-chat').addEventListener('click', () => {
	document.getElementById('chat-container').style.height = '500px'
	document.getElementById('bot-chat').style.display = 'none'
})
document.getElementById('close-chat').addEventListener('click', () => {
	document.getElementById('chat-container').style.height = '0px'
	document.getElementById('bot-chat').style.display = 'flex'
})
