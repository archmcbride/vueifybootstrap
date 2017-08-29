Vue.component('jumbo-button', {
	template: `
			<div class='jumbo-button'>
				<h1>{{header}}</h1>
				<p>{{info}}</p>
				<p><a class="btn btn-primary btn-lg" href="#"
					role="button">Learn More</a></p>
			</div>
			`,
	props:['header', 'info'],
	data: function(){
		return {

		}
	}
})

var mainVM=new Vue({
		el:'#app',
		data: {
			texts: [
				{
					text: `Hello World!`,
					para: `This is a paragraph`,
				},
				{
					text: `Hello, Boulder!`,
					para: `This is a paragraph about Boulder`,
				},
				

			]
		}
})