var Slider = function(ul_id, previous, next){

	this.nextb= next;
	this.prev= previous;                                                                                                                                                              
	this.itemCounter=0;
	this.elementsList = ul_id;
	this.elementsLis_item = this.elementsList.children().length;

}
Slider.prototype =
{
	contructor: Slider,
	goNext : function()
	{
		this.itemCounter++;
		if(this.itemCounter === this.elementsLis_item)
		{
			this.itemCounter = 0;
		}
		this.elementsList.css(
		{
			'left' : (-this.itemCounter*640)+'px'
		});
	},
	goPrevious : function()
	{
		this.itemCounter--;
		if (this.itemCounter===-1) {
			this.itemCounter=this.elementsLis_item-1;
		}
		this.elementsList.css(
		{
			'left' : (-this.itemCounter*640)+'px'
		});
	}
};
var ob_slider = new Slider ($('.itemsList') ,$(".previousBtn") ,$(".nextBtn"))
ob_slider.nextb.click(function(){
	ob_slider.goNext();
})

ob_slider.prev.click(function(){
	ob_slider.goPrevious();
})