/**
 * jQuery imageMask
 * @author Almog Baku - almog.baku@gmail.com
 * @see https://github.com/AlmogBaku/imageMask
 * 
 * @version 0.1.4
 * @license MIT License
 */

(function(e){var l=0;e.fn.imageMask=function(d){if(void 0==d||!this.is("img"))return!1;var c=null;d.src?c=d:(c=new Image,c.src=d);var k=this;e(c).load(function(){var d=null;k.each(function(){var f=null,a,i=c;a=e(this);var j;j=a.attr("id")?a.attr("id"):l++;j="imageMask_"+j+"_canvas";var f=e("<canvas>").attr({id:j,"class":a.attr("class"),style:a.attr("style"),width:i.width,height:i.height}).insertAfter(a)[0],g=f.getContext("2d");null==d&&(a=f,g.drawImage(c,0,0),i=g.getImageData(0,0,a.width,a.height), g.clearRect(0,0,a.width,a.height),d=i);var b=new Image;b.src=e(this).attr("src");e(b).load(function(){var a=1,a=b.width>b.height?f.height/b.height:f.width/b.width;g.drawImage(b,0,0,b.width,b.height,0,0,b.width*a,b.height*a);for(var a=d,c=g.getImageData(0,0,f.width,f.height),h=0;h<c.data.length;h+=4)c.data[h+3]=a.data[h+3];g.putImageData(c,0,0);e(k).remove()})})});return this}})(jQuery);