<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt">
  <!--<xsl:output method="html" version="1.0" encoding="UTF-8" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" indent="yes" media-type="text/html"/>-->
  <xsl:template match="/">
    <html>
      <header>
        <meta http-equiv="Expires" content="0"/>
        <meta http-equiv="Cache-Control" content="no-cache"/>
        <meta http-equiv="Pragma" content="no-cache"/>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"/>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"/>
        <script type="text/javascript" src="http://inservice.edu.tw/JS/jquery.tablesorter.min.js"/>
        <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/themes/base/jquery-ui.css"/>
        <script type="text/javascript" src="http://inservice.edu.tw/JS/jquery.tablesorter.min.js"/>
        <link rel="stylesheet" href="http://inservice.edu.tw/CSS/blue/style.css"/>
        <script type="text/javascript">
        //<![CDATA[
					$(document).ready(function(){
					  $("table").tablesorter();
					  alert("?拍XSLT撠ML頧??TML+Javascript(jquery)??靘?);
					});
				//]]>
		    </script>
      </header>
		  <body>
		    <h1>?葦隤脰”鈭斗?鞈?嚗遣蝡??<xsl:value-of select="//@createdate"/>嚗?/h1>
		    <hr/>
		    <h2>蝮??鞈?</h2>
		    <table id="DataBase_exchangecity" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
		      <thead>
		        <tr>
		          <th>蝮???迂</th>
		          <th>摮豢??/th>
		        </tr>
		      </thead>
		      <tbody>
		      <xsl:for-each select="//exchangecity">
		        <tr>
		          <td><xsl:value-of select="@cityname"/></td>
		          <td><xsl:value-of select="count(exchangeschool)"/></td>
		        </tr>
		      </xsl:for-each>
		      </tbody>
		    </table>
		    <h2>摮豢鞈?</h2>
		    <table id="DataBase_exchangeschool" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
		      <thead>
		        <tr>
		          <th>蝮???迂</th>
				  <th>摮豢?迂</th>
				  <th>摮豢隞?Ⅳ</th>		          
		          <th>隤脰”??/th>
		        </tr>
		      </thead>
		      <tbody>
		      <xsl:for-each select="//exchangeschool">
		        <tr>
		          <td><xsl:value-of select="../@cityname"/></td>
				  <td><xsl:value-of select="@schoolname"/></td>
		          <td><xsl:value-of select="@schoolid"/></td>
		          <td><xsl:value-of select="count(curriculumdata)"/></td>
		        </tr>
		      </xsl:for-each>
		      </tbody>
		    </table>
		    <h2>隤脰”鞈?</h2>
		    <table id="DataBase_curriculumdata" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
		      <thead><tr><th>蝮???迂</th><th>摮豢?迂</th><th>摮詨僑摨?/th><th>摮豢?</th><th>?葦鈭箸</th><th>隤脩?蝑</th></tr></thead>
		      <tbody>
		      <xsl:for-each select="//curriculumdata">
		        <tr>
		          <td><xsl:value-of select="../../@cityname"/></td>
		          <td><xsl:value-of select="../@schoolname"/></td>
		          <td><xsl:value-of select="@syear"/></td>
		          <td><xsl:value-of select="@session"/></td>
		          <td><xsl:value-of select="count(teacherdata/teacher)"/></td>
              <td><xsl:value-of select="count(curriculums/curriculum)"/></td>
		        </tr>
		      </xsl:for-each>
		      </tbody>
		    </table>
		    <h2>?葦鞈?</h2>
		    <table id="DataBase_teacher" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
		      <thead><tr><th>蝮???迂</th><th>摮豢?迂</th><th>摮詨僑摨?/th><th>摮豢?</th><th>?葦?迂</th><th>頨怠?霅絞銝蝺刻?</th><th>?葦霅?/th><th>摮貊???隞餅?撠?蝘</th></tr></thead>
		      <tbody>
		      <xsl:for-each select="//teacher">
		        <tr>
		          <td><xsl:value-of select="../../../../@cityname"/></td>
		          <td><xsl:value-of select="../../../@schoolname"/></td>
		          <td><xsl:value-of select="../../@syear"/></td>
		          <td><xsl:value-of select="../../@session"/></td>
		          <td><xsl:value-of select="teacheruname"/></td>
              <td><xsl:value-of select="@idnumber"/></td>
              <td>
                <ul>
                  <xsl:for-each select="certificates/certificate">
                     <li><xsl:value-of select="."/>嚗??<xsl:value-of select="@certdate"/>嚗?/li>
                  </xsl:for-each>
                </ul>
              </td>
              <td>
                <ul>
                  <xsl:for-each select="tachersubjects/tachersubject">
                     <li>摮貊???嚗?xsl:value-of select="tachersubjectdomain"/><br/>隞餅?撠?蝘嚗?xsl:value-of select="tachersubjectexpertise"/></li>
                  </xsl:for-each>
                </ul>
              </td>
		        </tr>
		      </xsl:for-each>
		      </tbody>
		    </table>
		    <h2>隤脩?鞈?</h2>
		    <table id="DataBase_curriculum" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
		      <thead><tr><th>蝮???迂</th><th>摮豢?迂</th><th>摮詨僑摨?/th><th>摮豢?</th><th>?玨?葦頨怠?霅絞銝蝺刻?</th><th>撟渡?</th><th>?剔?</th><th>?望活</th><th>蝭甈?/th><th>蝘閬?</th><th>蝘?迂</th></tr></thead>
		      <tbody>
		      <xsl:for-each select="//curriculum">
		        <tr>
		          <td><xsl:value-of select="../../../../@cityname"/></td>
		          <td><xsl:value-of select="../../../@schoolname"/></td>
		          <td><xsl:value-of select="../../@syear"/></td>
		          <td><xsl:value-of select="../../@session"/></td>
		          <td><xsl:value-of select="@teacheridnumber"/></td>
              <td><xsl:value-of select="@classyear"/></td>
              <td><xsl:value-of select="@classname"/></td>
              <td><xsl:value-of select="week"/></td>
              <td><xsl:value-of select="classtime"/></td>              
              <td>
                <xsl:if test="*[position()=last()][namespace-uri()='http://inservice.edu.tw/curriculumexchange/2011/10/curriculum10']">
                  擃?銝剖飛隤脩?璅??函雇閬?
                </xsl:if>
                <xsl:if test="*[position()=last()][namespace-uri()='http://inservice.edu.tw/curriculumexchange/2011/10/curriculum20']">
                  ?瑟平摮豢蝢斤?隤脩?蝬梯?
                </xsl:if>
                <xsl:if test="*[position()=last()][namespace-uri()='http://inservice.edu.tw/curriculumexchange/2011/10/curriculum3040']">
                  ??銝剖?摮訾?撟港?鞎怨玨蝔雇閬?
                </xsl:if>
                 <xsl:if test="*[position()=last()][namespace-uri()='http://inservice.edu.tw/curriculumexchange/2011/10/curriculum30']">
                  ??銝剖飛隤脩?璅?
                </xsl:if>
                 <xsl:if test="*[position()=last()][namespace-uri()='http://inservice.edu.tw/curriculumexchange/2011/10/curriculum40']">
                  ??撠飛隤脩?璅?
                </xsl:if>
              </td>
              <td><xsl:value-of select="*[position()=last()]"/></td>
		        </tr>
		      </xsl:for-each>
		      </tbody>
		    </table>
		  <!--
			<hr/>
			<h2>?葦隤脰”</h2>
			<xsl:for-each select="//exchangecity[1]//exchangeschool[1]//curriculumdata[1]//teacher">
				<xsl:variable name="idnumber" select="@idnumber"/> 
				<h3>?葦嚗?xsl:value-of select="teacheruname"/>隤脰”</h3>
				<table border="1">
					<tr><td>&#160;</td><th>?曹?</th><th>?曹?</th><th>?曹?</th><th>?勗?</th><th>?曹?</th></tr>
					<tr>
					<th>蝚砌?蝭</th>
					<td>
						<xsl:value-of select="../..//curriculum[@teacheridnumber=$idnumber][week='?曹?'][classtime='蝚砌?蝭']/*[position()=last()]"/>
					</td>
					<td>
						<xsl:value-of select="../..//curriculum[@teacheridnumber=$idnumber][week='?曹?'][classtime='蝚砌?蝭']/*[position()=last()]"/>
					</td>
					<td>
						<xsl:value-of select="../..//curriculum[@teacheridnumber=$idnumber][week='?曹?'][classtime='蝚砌?蝭']/*[position()=last()]"/>
					</td>
					<td>
						<xsl:value-of select="../..//curriculum[@teacheridnumber=$idnumber][week='?勗?'][classtime='蝚砌?蝭']/*[position()=last()]"/>
					</td>
					<td>
						<xsl:value-of select="../..//curriculum[@teacheridnumber=$idnumber][week='?曹?'][classtime='蝚砌?蝭']/*[position()=last()]"/>
					</td>
					<td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砌?蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砌?蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砍?蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砌?蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砍蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砌?蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砍蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砌?蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					<tr><th>蝚砍?蝭</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>
				</table>
			</xsl:for-each>
			-->
		    <hr/>
		    <span>
          XLST?:<xsl:value-of select="system-property('xsl:version')"/>
        </span>
        <span>
          XLST閫????<xsl:value-of select="system-property('xsl:vendor')"/>
          <xsl:if test="system-property('xsl:vendor')='Microsoft'">
            嚗SXML?嚗?xsl:value-of select="system-property('msxsl:version')"/>
            <!--
			<xsl:if test="system-property('msxsl:version')&lt;6">
              <a href="http://www.microsoft.com/downloads/zh-tw/details.aspx?FamilyID=993c0bcf-3bcf-4009-be21-27e85e1857b1">隢?頛???啁???MSXML) 6.0</a>
            </xsl:if>
			-->
            嚗?
          </xsl:if>
         嚗雯?:<xsl:value-of select="system-property('xsl:vendor-url')"/>嚗?
        </span>
    	</body>
	  </html>
	</xsl:template>
</xsl:stylesheet>