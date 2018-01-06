var currUrl = document.URL;  //\u83B7\u53D6\u9875\u9762\u7684URL
var s = currUrl.indexOf("gate/big5");	//\u5206\u5272\u7E41\u4F53\u7684\u6807\u5FD7

function getDomainName(){       //\u83B7\u53D6\u5F53\u524D\u4F7F\u7528\u7684\u57DF\u540D
	var sDomainName;
	if(s>0)
	{
		sDomainName = currUrl.substring(s+10);
		sDomainName = sDomainName.substring(0,(sDomainName.indexOf("/")));
	}
	else
	{
		sDomainName = currUrl.substring(7);
		sDomainName = sDomainName.substring(0,(sDomainName.indexOf("/")));
	}
	return sDomainName;
}

var g_ROOTPATH = "/chn/";

function setRootPath( p_sPath ){
	g_ROOTPATH = p_sPath;
}

function main_writeHeader()
{   
    var sName = getDomainName();
	if(s<0)   //\u7B80\u4F53\u4E2D\u6587\u9875\u9762
	{
		document.write("<TABLE BORDER='0' CELLPADDING='0' CELLSPACING='0' WIDTH='770'><TR><TD WIDTH='769' HEIGHT='124' ALIGN='CENTER'><IMG BORDER='0' SRC='" + g_ROOTPATH + "images/top1.jpg' border='0' usemap='#Map'></TD></TR>"+
				    "<map name='Map'><area shape='rect' coords='618,5,675,22' href='http://big5.fmprc.gov.cn/gate/big5/"+ sName +"/chn'>"+
					"<area shape='rect' coords='702,6,759,23' href='../" + g_ROOTPATH + "eng'></map>"+
				   "</TABLE>");
	}
	else   //\u7E41\u4F53\u4E2D\u6587\u9875\u9762
	{		
		document.write("<TABLE BORDER='0' CELLPADDING='0' CELLSPACING='0' WIDTH='770'><TR><TD WIDTH='769' HEIGHT='124' ALIGN='CENTER'><IMG BORDER='0' SRC='" + g_ROOTPATH + "images/top2.jpg' border='0' usemap='#Map'></TD></TR>"+
				    "<map name='Map'><area shape='rect' coords='618,5,675,22' href='ht"+"tp://"+ sName +"/chn'>"+
					"<area shape='rect' coords='702,6,759,23' href='../" + g_ROOTPATH + "eng'></map>"+
				   "</TABLE>");
	}
	
}

function main_writeSearch()
{
	document.write("<table cellspacing='0' cellpadding='0' width='100' border='0' align='center'>"+
	 "<form action='http://search.fmprc.gov.cn/search/new/se.jsp' method='post' style='margin-bottom:0'>"+
		"<input type='hidden' name='siteid' value='29'/><input type='hidden' name='sitename' value='Chicago_chn'/>"+
		"<tr><td height='25' ALIGN='LEFT'><input type='text' name='sw' size='18'></td></tr>"+
         "<tr><td height='25' ALIGN='LEFT'>"+
             "<select name='select'>"+
             "<option value='1'>\u672C\u7AD9\u70B9</option>"+
			 "<option value='0'>\u6240\u6709\u7AD9\u70B9</option>"+
             "</select>"+
         "&nbsp;&nbsp;&nbsp;<input type='submit' name='Submit' value='\u641C \u7D22'></td></tr>"+
	 "</form>"+
"</table>");
}

function main_writeFoot()
{
	document.write("<TABLE WIDTH='770' CELLPADDING='0' CELLSPACING='0' BORDER='0' align='center'>"+
				   " <tr><td bgcolor='ffffff' height='8'></td></tr>"+
				   " <tr><td bgcolor='666666' height='1'></td></tr>"+
   "<tr>"+ 
    "<td WIDTH='770' ALIGN='CENTER' height='1'><font STYLE='line-height: 20px ; font-size:12px; color: #000000;  '>\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u9A7B\u829D\u52A0\u54E5\u603B\u9886\u4E8B\u9986 2007 \u7248\u6743\u6240\u6709 webmaster@chinaconsulatela.org <br>Tel:312-8030095  京ICP备06038296号 京公网安备110105002097</font></td>"+
      "</tr></TABLE>");
}

function main_doPrint()
{
	var str="<html>";
	var article;
	var css;
	var strAdBegin="<!--NEWSZW_HZH_BEGIN-->";
	var strAdEnd="<!--NEWSZW_HZH_END-->";
	var strFontSize='\u3010<A href="javascript:doZoom(16)">\u5927</A> <A href="javascript:doZoom(14)">\u4E2D</A> <A href="javascript:doZoom(12)">\u5C0F</A>\u3011'
	var strdoPrint="doPrint()";
	var strTmp;
	
	css="<style>"
	+"td,.f12{font-size:12px}"
	+".f24 {font-size:24px;}"
	+".f14 {font-size:14px;}"
	+".title14 {font-size:14px;line-height:130%}"
	+".l17 {line-height:170%;}"
	+"</style>";
	
	str +=	css;
	str +=	'<meta http-equiv="content-type" content="text/html; charset=gb2312">';
	str +=	'<title>'+document.title+'</title>';
	str +=	"<body bgcolor=#ffffff topmargin=5 leftmargin=5 marginheight=5 marginwidth=5 onLoad='window.print()'>";
	str +=	"<center>";
	str +=	"<table width=660 border=0 cellpadding=0 cellspacing=20 bgcolor=#EDF0F5><tr><td align=center>";
	
	article=document.getElementById('article').innerHTML;
	if(article.indexOf(strAdBegin)!=-1){
		str +=article.substr(0,article.indexOf(strAdBegin));
		strTmp=article.substr(article.indexOf(strAdEnd)+strAdEnd.length, article.length);
	}else{
		strTmp=article
	}
	//str +=strTmp.substr(0,strTmp.indexOf(strFontSize));
	//strTmp=strTmp.substr(strTmp.indexOf(strFontSize)+strFontSize.length, strTmp.length);
	str += strTmp;
	//str +=strTmp.substr(0,strTmp.indexOf(strdoPrint));
	//str +="window.print()";
	//str +=strTmp.substr(strTmp.indexOf(strdoPrint)+strdoPrint.length, strTmp.length);
	str +=	"</td></tr></table>";
	str += "<br><TABLE cellSpacing=0 cellPadding=0 width=660 border=0 align=center><TBODY><TR><TD height=10><IMG height='1' alt='' src='./7_c.gif' width='1' border='0'></TD></TR><TR><TD align=middle bgColor=#efefef>\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u9A7B\u829D\u52A0\u54E5\u603B\u9886\u4E8B\u9986 \u7248\u6743\u6240\u6709</TD></TR></TBODY></TABLE></CENTER></TD></TR></TBODY></TABLE>";
	str += "</center>";
	str +=	"</body></html>";
	document.write(str);
	document.close();
}

//==============================================\u5206\u9875\u4EE3\u7801BEGIN=================================================
var pageCount = 0; 
var pageNavigation="";
var head="";
var pageNo="";
var tail="";

var startPage=1;
var endPage=8;
var maxPage=5;//\u5206\u9875\u5BFC\u822A\u6761\u663E\u793A\u7684\u9875\u53F7\u6570\u76EE

//\u53D6\u5546\u8FD0\u7B97
function getQuotient(num1,num2)
{   
   var t;
   t=num1/num2;
   return (Math.floor(t));
}

//\u521D\u59CB\u5316PageCount
function setPageCount()
{
	if( rsCount % pageNum>0 )
	  {
		 pageCount = (rsCount - (rsCount%pageNum))/pageNum +1;
	  }
	else{
		 pageCount = rsCount/pageNum; //\u53D6\u5F97\u5F53\u524D\u9875\u5BF9\u8C61\u5E76
		 }
}

//\u663E\u793A\u5206\u9875\u5BFC\u822A\u6761
function showPageNavi()
{
	if (!hasMorePages()){
	topPagebar.style.display='inline';
	bottomPagebar.style.display='inline';
	}
}



//\u5224\u65AD\u5F53\u524D\u8BB0\u5F55\u96C6\u662F\u5426\u6709\u66F4\u591A\u9875\u9700\u8981\u663E\u793A
function hasMorePages(){
	if ( rsCount > pageNum )
	return false;
	return true;
}
function onRef()
{
	return;
}

//getCurrPage(_currentPage)\u89C4\u8303\u8DF3\u8F6C\u9875\u7801\u51FD\u6570;_currentPage \u8DF3\u8F6C\u9875\u7801\u8F93\u5165\u503C
function getCurrPage(_currentPage){
 var cPage =1;
 
 if( _currentPage<=0 || _currentPage=="")
  cPage =1;
 else if(_currentPage>pageCount)
  cPage = pageCount;
 else
  cPage = _currentPage;
 return cPage;
}

//gotoPage()\u76F4\u63A5\u8DF3\u8F6C\u51FD\u6570
function gotoPage(){
 toPage(CP.value);
}

function goto1(){
 toPage(CP1.value);
}

//toPage(_pageNo)\u8DF3\u8F6C\u51FD\u6570;_pageNo\u8981\u8DF3\u8F6C\u7684\u9875\u53F7
function toPage(_pageNo){
  head="";
  pageNo="";
  tail="";
  pageNavigation="";
  setPageCount();
 if( rsCount!=0 ){
  var pageHtml = "<TABLE width='100%' border='0' CELLSPACING='0' CELLPADDING='4'>\r\n";
  var cP = getCurrPage(_pageNo);
  var startPos = cP*pageNum-pageNum;
  var endPos = 0;
  if(cP*pageNum>rsCount)
   endPos=rsCount;
  else
   endPos = cP*pageNum;

  for( var i=startPos; i<endPos; i++){
   pageHtml +="<tr>";
   for( var j=0; j<lineNum; j++ ){
    if(i<endPos)
     pageHtml += "<td width='"+(100/lineNum)+"%'>"+outlines[i].innerHTML + "</td>\r\n";
    else
     pageHtml +="<td width='"+(100/lineNum)+"%'>&nbsp;</td>";
    i++;
   }
   i--;
   pageHtml +="</tr>\r\n";
  }
  pageHtml +="</table>";
  CP.value = CP1.value = cP;
  FileBody.innerHTML= pageHtml;
  setPageNavigation();
  showPageNavi();
  //alert(pageHtml);
 }
 return false;
}

//\u786E\u5B9A\u663E\u793A\u54EA\u4E9B\u9875\u53F7
function setPageNo(start,end)
{
	 var pageN;

	 for(pageN=start;pageN<=end;pageN++)
	 {
			  if(pageN==CP.value)
			  {
			    pageNo+="<font color=red><b>"+pageN+"</b></font>&nbsp;";
			  }
			  else{
			   pageNo+= "<a href=\"javascript:onRef();\" onclick=\"toPage("+pageN+")\">"+pageN+"</a>&nbsp;";
			  }
	 }
}
//\u8BBE\u7F6E\u5206\u9875\u5BFC\u822A\u6761
function setPageNavigation(){

	 if(CP.value>0)
	 {
	  head+="<a href=\"javascript:onRef();\" onclick=\"toPage(1)\"><font color=red>\u9996\u9875</font></a>&nbsp;";
	 // head+="<a href=\"javascript:onRef();\" onclick=\"toPage("+(CP.value-1)+")\"><font color=red>\u4E0A\u4E00\u9875</font></a>&nbsp;";
	    
		  var k;
		  k=(CP.value)%maxPage;
		  if (k==0)
		  {
			  startPage=(getQuotient(CP.value,maxPage)-1)*maxPage+1;
		  }
		 else{ startPage=(getQuotient(CP.value,maxPage))*maxPage+1;}
		   	  
		    head+="<a href=\"javascript:onRef();\" onclick=\"toPage("+(startPage-1)+")\"><font color=red>&lt;&lt;</font></a>&nbsp;";
		
	 }
 
	 

	 if(CP.value<=pageCount)
	 {
	//  tail+="<a href=\"javascript:onRef();\" onclick=\"toPage("+((CP.value)*1+1)+")\"><font color=red>\u4E0B\u4E00\u9875</font></a>&nbsp;";
	  
	  
		  var i;
		  i=(CP.value)%maxPage;
		  if (i==0)
		  {
			endPage=getQuotient(CP.value,maxPage)*maxPage;
		  }
		 else{ 
		     if((startPage<=pageCount) && (pageCount<=(startPage+maxPage-1))) endPage=pageCount;
			 else {endPage=((getQuotient(CP.value,maxPage))+1)*maxPage;}
		      }
	      tail+="<a href=\"javascript:onRef();\" onclick=\"toPage("+(endPage+1)+")\"><font color=red>&gt;&gt;</font></a>&nbsp;";
	      tail+="<a href=\"javascript:onRef();\" onclick=\"toPage("+pageCount+")\"><font color=red>\u5C3E\u9875</font></a>&nbsp;";
	 }
	 

	setPageNo(startPage,endPage);
	pageNavigation +=head+pageNo+tail;
	pageNavigation +="<font color=blue>\u5171 <font color=red>"+pageCount+"</font> \u9875&nbsp;\u5171<font color=red>"+rsCount+"</font>\u6761\u8BB0\u5F55</font>";
	 var showPageLine = document.getElementsByName("pl");
	 for( var pls=0; pls<showPageLine.length; pls++)
	 {
	  showPageLine[pls].innerHTML = pageNavigation;
	 }
}

//=================================================\u5206\u9875\u4EE3\u7801END===================================================


//\u63A8\u8350\u7ED9\u670B\u53CB\u7684\u65B0\u51FD\u6570
function validate_form() {

	var str0,str1,str2,str3,str4,str;

	validity = true; // assume valid

	if (!check_email(document.Form2000.FriendEmail.value)) {
		validity = false;
		alert('\u60A8\u8F93\u5165\u7684Email\u65E0\u6548\u6216\u8005\u4E3A\u7A7A\uFF01');
	}

	if( validity ) {
		str0="\u5916\u4EA4\u90E8\u7F51\u7AD9\u63A8\u8350\u65B0\u95FB";
		str1="\u60A8\u597D!";
		str2="\u60A8\u7684\u670B\u53CB\u5411\u60A8\u63A8\u8350\u5916\u4EA4\u90E8\u7F51\u7AD9\u65B0\u95FB:";
		str3="\u201C"+document.title+"\u201D"+"\n\n\u94FE\u63A5\u7F51\u5740\uFF1A";
		str4=this.location;
		str=str0+"\n"+str1+"\n"+str2+"\n"+str3+"\n"+str4+"\n";
		document.Form2000.Context.value=str;

		document.Form2000.action="mailto:"+document.Form2000.FriendEmail.value+"?Subject=\u63A8\u8350\u65B0\u95FB";
	}
	return validity;
}


//\u5224\u65AD\u7528\u6237\u586B\u5199\u7684EMail\u662F\u5426\u6709\u6548\u51FD\u6570
function check_email( address ) {
	if( (address=="")||(address.indexOf('@')==-1)||(address.indexOf('.')==-1) )
		return false;

	return true;
}

//function LTrim( p_string ){
	//var sRet = p_string.replace( /\u3000*/g, "" );	
	//return sRet.replace(/^\s*/g, "");
//}

//\u6839\u636Eid\u83B7\u5F97\u6307\u5B9A\u5143\u7D20\u5BF9\u8C61
function getElById(_sId){
    return document.getElementById(_sId);
}
 
//\u6839\u636Eid\u83B7\u5F97\u6307\u5B9A\u5143\u7D20\u7684\u5185\u90E8\u6587\u672C
function getInnerTextById(_sElId){
     var oEl = getElById(_sElId);
     return oEl.childNodes[0].nodeValue;
            }
 
//\u53BB\u9664\u5B57\u7B26\u4E32\u5DE6\u8FB9\u7684\u6240\u6709\u7A7A\u683C
function LTrim( p_string ){
     var nLen = p_string.length;
     var nStartPose = 0;
     for(var i=0; i<nLen; i++){
         var sChar = p_string.charAt(i);
         if(sChar == ' ' || sChar == '\u3000'){
             continue;
          }
 
         nStartPose = i;
          break;
      }
 
      return p_string.substring(nStartPose);
}
	