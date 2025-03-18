import { useRef } from "react";
import { EmailEditor } from "./components/email-editor";

function App() {
  const editorRef =
    useRef<React.ComponentProps<typeof EmailEditor>["editorRef"]["current"]>(
      null
    );

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <EmailEditor editorRef={editorRef} />

      <button
        onClick={() => {
          console.log(editorRef.current?.getContent());
        }}
      >
        获取 HTML
      </button>

      <button
        onClick={() => {
          editorRef.current?.setContent(RICH_HTML);
        }}
      >
        填充 HTML
      </button>
    </div>
  );
}

const RICH_HTML = `
<style type="text/css">
@media only screen and (min-width:568px) {
  div.ntes-edm-desktop {
    display: block !important;
  }

  div.ntes-edm-mobile {
    display: none !important;
  }
}
</style>  
<style>
* {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
}

html,
body {
  margin: 0 auto !important;
  padding: 0 !important;
  width: 100% !important;
}

table {
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
}

a {
  text-decoration: none;
}

img {
  vertical-align: top;
  
  
}

.ntes-edm-desktop,
.ntes-edm-mobile {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
}

.ntes-edm-desktop {
  display: none !important;
}

.ntes-edm-mobile {
  margin: 0 auto;
  max-width: 100%;
  width: 100% !important;
  height: inherit !important;
  overflow: visible !important;
  display: block !important;
}
</style> 


<style>
.fix_media,
.netease_mail_readhtml .ntes-edm-desktop {
  display: block !important;
}

.fix_media,
.netease_mail_readhtml .ntes-edm-mobile {
  display: none !important;
}

.fix_media .master-button{
  display: block !important;
}

</style>    
<div style="display:none; max-height:0; overflow:hidden"></div>  
<div class="ntes-edm-mobile" style="display:none; width:0; height:0; overflow:hidden;"> 
<div style="max-width:412px;margin:0 auto;"> 
<center>
 <table class="direct-mail-table" role="presentation" width="93.75%" style="border-collapse: collapse; border-spacing: 0px; margin-left: auto; margin-right: auto; width: 93.75%; background-color: #ffffff; max-width: 93.75%;">
  <tbody>
   <tr>
    <td style="padding-left: 10px; padding-right: 10px; width: 87.5%; text-align: center;">
     <center>
      <table class="direct-mail-table" role="presentation" width="100%" style="border-collapse: collapse; border-spacing: 0px; margin-left: auto; margin-right: auto; width: 100%; background-color: #ffffff;">
       <tbody>
        <tr>
         <td style="padding-top: 21px; padding-bottom: 21px; text-align: center;"><img width="78.90625%" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/8240b0a8d4cfade17388ca913f6bff58.png" alt="" style="width: 78.9062%;" /></td>
        </tr>
        <tr>
         <td height="10px" style="height: 10px; line-height: 10px; color: #ffffff; text-align: left;"><br /></td>
        </tr>
        <tr>
         <td style="font-weight: bold; font-size: 15px; line-height: 24px; text-align: left; color: #333333;">尊敬的网易邮箱用户：</td>
        </tr>
        <tr>
         <td height="16px" style="height: 16px; line-height: 16px; color: #ffffff; text-align: left;"><br /></td>
        </tr>
        <tr>
         <td style="font-size: 14px; line-height: 23px; text-align: left; color: #555555;">以下超大附件<span style="color: #cc0000;">即将过期</span>，过期后文件将被删除，若有需要请您及时下载保存，您也可以选择升级成为邮箱会员，升级后未过期文件保存期即重置为50天。</td>
        </tr>
        <tr>
         <td height="20px" style="height: 20px; line-height: 20px; color: #ffffff; text-align: left;"><br /></td>
        </tr>
        <tr>
         <td style="text-align: left;">
          <table class="direct-mail-table" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 2px; margin-bottom: 5px; width: 100%;">
           <tbody>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">文 件 名</td>
             <td style="text-align: left;">
              <table class="direct-mail-table" role="presentation" width="100%" style="border-collapse: collapse; border-spacing: 0px; width: 100%;">
               <tbody>
                <tr>
                 <td height="40px" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; word-break: break-all; overflow-wrap: break-word; padding-top: 6px; padding-bottom: 6px; height: 40px; text-align: left;">chrome.dll</td>
                 <td width="30%" height="40px" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 0px; height: 40px; width: 30%; text-align: center;"><a href="https://mail.163.com/large-attachment-download/index.html?p=X-NTES-HUGE-ATTACHMENT&amp;file=djAyM2VySzgzWFNLMmMxL2xWV2wrV3lGM0ZubFBTMnJaL1BmNFNWNGlBWmtDYz0" target="_blank" style="font-size: 12px; line-height: 12px; height: 12px; text-decoration: none;">下载</a></td>
                </tr>
               </tbody>
              </table></td>
            </tr>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">文件大小</td>
             <td height="40px" colspan="2" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; height: 40px; text-align: left;">47.68M</td>
            </tr>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">过期时间</td>
             <td height="40px" colspan="2" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; height: 40px; text-align: left;">2025年03月22日14时26分<br />已经过期文件无法重置</td>
            </tr>
           </tbody>
          </table>
          <table class="direct-mail-table" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 2px; margin-bottom: 5px; width: 100%;">
           <tbody>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">文 件 名</td>
             <td style="text-align: left;">
              <table class="direct-mail-table" role="presentation" width="100%" style="border-collapse: collapse; border-spacing: 0px; width: 100%;">
               <tbody>
                <tr>
                 <td height="40px" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; word-break: break-all; overflow-wrap: break-word; padding-top: 6px; padding-bottom: 6px; height: 40px; text-align: left;">chrome_child.dll</td>
                 <td width="30%" height="40px" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 0px; height: 40px; width: 30%; text-align: center;"><a href="https://mail.163.com/large-attachment-download/index.html?p=X-NTES-HUGE-ATTACHMENT&amp;file=djAyVFlCRk9oaEtrTXVHYWMvTkkrbHR6M0ZubFBTMnJaL1BmNFNWNGlBWmtDYz0" target="_blank" style="font-size: 12px; line-height: 12px; height: 12px; text-decoration: none;">下载</a></td>
                </tr>
               </tbody>
              </table></td>
            </tr>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">文件大小</td>
             <td height="40px" colspan="2" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; height: 40px; text-align: left;">66.14M</td>
            </tr>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">过期时间</td>
             <td height="40px" colspan="2" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; height: 40px; text-align: left;">2025年03月22日14时26分<br />已经过期文件无法重置</td>
            </tr>
           </tbody>
          </table>
          <table class="direct-mail-table" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 2px; margin-bottom: 5px; width: 100%;">
           <tbody>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">文 件 名</td>
             <td style="text-align: left;">
              <table class="direct-mail-table" role="presentation" width="100%" style="border-collapse: collapse; border-spacing: 0px; width: 100%;">
               <tbody>
                <tr>
                 <td height="40px" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; word-break: break-all; overflow-wrap: break-word; padding-top: 6px; padding-bottom: 6px; height: 40px; text-align: left;">interactive_ui_tests.exe</td>
                 <td width="30%" height="40px" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 0px; height: 40px; width: 30%; text-align: center;"><a href="https://mail.163.com/large-attachment-download/index.html?p=X-NTES-HUGE-ATTACHMENT&amp;file=djAyRFd3eFZnSExpRy9icm9YUHN5c29XWEZubFBTMnJaL1BmNFNWNGlBWmtDYz0" target="_blank" style="font-size: 12px; line-height: 12px; height: 12px; text-decoration: none;">下载</a></td>
                </tr>
               </tbody>
              </table></td>
            </tr>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">文件大小</td>
             <td height="40px" colspan="2" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; height: 40px; text-align: left;">101.04M</td>
            </tr>
            <tr>
             <td width="25.625%" height="40px" style="background: #f0f0f0; padding-left: 5px; padding-right: 5px; font-size: 12px; color: #555555; height: 40px; width: 25.625%; text-align: center;">过期时间</td>
             <td height="40px" colspan="2" style="background: #fbfbfb; font-size: 12px; color: #555555; padding-left: 10px; height: 40px; text-align: left;">2025年03月22日14时39分<br />已经过期文件无法重置</td>
            </tr>
           </tbody>
          </table></td>
        </tr>
        <tr>
         <td style="font-size: 11px; line-height: 20px; color: #999999; text-align: left;"><span style="color: #555555;">温馨提醒：请注意文件过期时间，已过期文件无法重置保存期。</span></td>
        </tr>
        <tr>
         <td height="25px" style="height: 25px; line-height: 25px; color: #ffffff; text-align: left;"><br /></td>
        </tr>
        <tr>
         <td style="text-align: center;">
          <div>  <a id="mail_member" goods-type="cloudFile" utm-source="cloudFile-remindmail" sys="1" file-ids="213914726,213933009,213933028" target="_blank" href="https://count.mail.163.com/statistics/kqBAOj.do?product=notify_center_mc_mail_106&amp;domain=email&amp;uid=m18352754765@163.com&amp;area=4&amp;orgParams=privilegeType%3D4%26utm_source%3DcloudFile-remindmail" style="width: 33.75%; margin: 0px auto; background-color: #3b78dd; border-radius: 4px; color: #ffffff; display: inline-block; font-size: 12px; line-height: 35px; text-align: center; text-decoration: none; text-size-adjust: none;">立即重置</a> 
          </div></td>
        </tr>
        <tr>
         <td height="30px" style="height: 30px; line-height: 30px; color: #ffffff; text-align: left;"><br /></td>
        </tr>
        <tr>
         <td style="font-size: 12px; line-height: 16px; height: 16px; font-weight: bold; text-align: left; color: #555555;">开通邮箱会员，除了超大附件保存期提至50天，更有</td>
        </tr>
        <tr>
         <td style="text-align: left;">
          <center>
           <table class="direct-mail-table" role="presentation" width="87.5%" style="border-collapse: collapse; border-spacing: 0px; width: 87.5%; margin-left: auto; margin-right: auto;">
            <tbody>
             <tr>
              <td width="50%" style="width: 50%; text-align: center;"><p style="height: 27px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="auto" width="28.6%" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/f0811f29c4323e891bfd4bb9bb7c255f.jpg" alt="" style="width: 28.6%; height: auto;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 12px; line-height: 17px; color: #999999; margin-top: 0px; margin-bottom: 0px;">大附件极速下载</p></td>
              <td width="50%" style="width: 50%; text-align: center;"><p style="height: 27px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="auto" width="28.6%" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/da1e217d23f26357e40424519e91cd94.jpg" alt="" style="width: 28.6%; height: auto;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 12px; line-height: 17px; color: #999999; margin-top: 0px; margin-bottom: 0px;">海量PPT模板</p></td>
             </tr>
             <tr>
              <td width="50%" style="width: 50%; text-align: center;"><p style="height: 27px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="auto" width="28.6%" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/5bfa0fbddd8488e1e657dceeabb056c6.jpg" alt="" style="width: 28.6%; height: auto;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 12px; line-height: 17px; color: #999999; margin-top: 0px; margin-bottom: 0px;">群发特权</p></td>
              <td width="50%" style="width: 50%; text-align: center;"><p style="height: 27px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="auto" width="28.6%" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/8f5683e0091a30e30c3ac5ca889e7ca8.jpg" alt="" style="width: 28.6%; height: auto;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 12px; line-height: 17px; color: #999999; margin-top: 0px; margin-bottom: 0px;">超大存储空间</p></td>
             </tr>
             <tr>
              <td width="50%" style="width: 50%; text-align: center;"><p style="height: 27px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="auto" width="28.6%" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/59429f0a3addc87f31189301c9cabb01.jpg" alt="" style="width: 28.6%; height: auto;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 12px; line-height: 17px; color: #999999; margin-top: 0px; margin-bottom: 0px;">PDF格式转化</p></td>
              <td width="50%" style="width: 50%; text-align: center;"><p style="height: 27px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="auto" width="28.6%" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/87eed75fe1d04fe73edf0d8b5cb45d1e.jpg" alt="" style="width: 28.6%; height: auto;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 12px; line-height: 17px; color: #999999; margin-top: 0px; margin-bottom: 0px;">免广告</p></td>
             </tr>
            </tbody>
           </table>
          </center></td>
        </tr>
       </tbody>
      </table>
     </center></td>
   </tr>
   <tr>
    <td height="35px" style="height: 35px; line-height: 35px; color: #ffffff; text-align: left;"><br /></td>
   </tr>
   <tr>
    <td height="34px" style="background: #f8f9fa; color: #cccccc; font-size: 11px; line-height: 14px; height: 34px; text-align: center;">— 网易邮件中心 —</td>
   </tr>
  </tbody>
 </table>
</center> 
</div> 
</div>  
<div class="ntes-edm-desktop"> 
<center>
<table class="direct-mail-table" role="presentation" width="750px" style="border-collapse: collapse; border-spacing: 0px; margin-left: auto; margin-right: auto; width: 750px; background-color: #ffffff; border: 1px solid #e6e6e6;">
 <tbody>
  <tr>
   <td style="padding-top: 40px; padding-bottom: 40px; text-align: center;"><img width="394" src="https://onegoods.nosdn.127.net/resupload/2020/8/13/3d4bd27a0378573a23541c06ebc91761.png" alt="" style="width: 394px;" /></td>
  </tr>
  <tr>
   <td style="text-align: center;">
    <center>
     <table class="direct-mail-table" role="presentation" width="650px" style="border-collapse: collapse; border-spacing: 0px; margin-left: auto; margin-right: auto; width: 650px; background-color: #ffffff;">
      <tbody>
       <tr>
        <td style="font-weight: bold; font-size: 18px; line-height: 26px; text-align: left; color: #333333;">尊敬的网易邮箱用户：</td>
       </tr>
       <tr>
        <td height="20px" style="height: 20px; line-height: 20px; color: #ffffff; text-align: left;"><br /></td>
       </tr>
       <tr>
        <td style="font-size: 16px; line-height: 28px; text-align: left; color: #555555;">以下超大附件<span style="color: #cc0000;">即将过期</span>，过期后文件将被删除，若有需要请您及时下载保存，您也可以选择升级成为邮箱会员，升级后未过期文件保存期即重置为50天。</td>
       </tr>
       <tr>
        <td height="24px" style="height: 24px; line-height: 24px; color: #ffffff; text-align: left;"><br /></td>
       </tr>
       <tr>
        <td style="text-align: left;">
         <table class="direct-mail-table" cellspacing="2" role="presentation" width="650px" style="border-collapse: separate; border-spacing: 2px; width: 650px;">
          <tbody>
           <tr>
            <td width="245" height="48" style="background: #f0f0f0; padding-left: 10px; padding-right: 10px; font-size: 16px; color: #555555; height: 48px; width: 245px; text-align: center;">文 件 名</td>
            <td width="156" height="48" style="background: #f0f0f0; padding-left: 10px; padding-right: 10px; font-size: 16px; color: #555555; height: 48px; width: 156px; text-align: center;">文件大小</td>
            <td width="245" height="48" style="background: #f0f0f0; padding-left: 10px; padding-right: 10px; font-size: 16px; color: #555555; height: 48px; width: 245px; text-align: center;">过期时间</td>
           </tr>
           <tr>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;"><p style="height: 12px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 24px; color: #555555; margin-top: 0px; margin-bottom: 0px; word-break: break-all; overflow-wrap: break-word; max-width: 245px; padding-left: 12px; padding-right: 12px;">chrome.dll</p><a href="https://mail.163.com/large-attachment-download/index.html?p=X-NTES-HUGE-ATTACHMENT&amp;file=djAyM2VySzgzWFNLMmMxL2xWV2wrV3lGM0ZubFBTMnJaL1BmNFNWNGlBWmtDYz0" target="_blank" style="font-size: 14px; line-height: 24px; height: 24px; text-decoration: none;">下载保存</a><p style="height: 12px; margin-top: 0px; margin-bottom: 0px;"><br /></p></td>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;">47.68M</td>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;">2025年03月22日14时26分<br />已经过期文件无法重置</td>
           </tr>
           <tr>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;"><p style="height: 12px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 24px; color: #555555; margin-top: 0px; margin-bottom: 0px; word-break: break-all; overflow-wrap: break-word; max-width: 245px; padding-left: 12px; padding-right: 12px;">chrome_child.dll</p><a href="https://mail.163.com/large-attachment-download/index.html?p=X-NTES-HUGE-ATTACHMENT&amp;file=djAyVFlCRk9oaEtrTXVHYWMvTkkrbHR6M0ZubFBTMnJaL1BmNFNWNGlBWmtDYz0" target="_blank" style="font-size: 14px; line-height: 24px; height: 24px; text-decoration: none;">下载保存</a><p style="height: 12px; margin-top: 0px; margin-bottom: 0px;"><br /></p></td>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;">66.14M</td>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;">2025年03月22日14时26分<br />已经过期文件无法重置</td>
           </tr>
           <tr>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;"><p style="height: 12px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 24px; color: #555555; margin-top: 0px; margin-bottom: 0px; word-break: break-all; overflow-wrap: break-word; max-width: 245px; padding-left: 12px; padding-right: 12px;">interactive_ui_tests.exe</p><a href="https://mail.163.com/large-attachment-download/index.html?p=X-NTES-HUGE-ATTACHMENT&amp;file=djAyRFd3eFZnSExpRy9icm9YUHN5c29XWEZubFBTMnJaL1BmNFNWNGlBWmtDYz0" target="_blank" style="font-size: 14px; line-height: 24px; height: 24px; text-decoration: none;">下载保存</a><p style="height: 12px; margin-top: 0px; margin-bottom: 0px;"><br /></p></td>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;">101.04M</td>
            <td style="background: #fbfbfb; font-size: 14px; line-height: 24px; height: 24px; color: #555555; text-align: center;">2025年03月22日14时39分<br />已经过期文件无法重置</td>
           </tr>
          </tbody>
         </table></td>
       </tr>
       <tr>
        <td height="10px" style="height: 10px; line-height: 10px; color: #ffffff; text-align: left;"><br /></td>
       </tr>
       <tr>
        <td style="font-size: 12px; line-height: 20px; color: #999999; text-align: left;"><span style="color: #555555;">温馨提醒：请注意文件过期时间，已过期文件无法重置保存期。</span></td>
       </tr>
       <tr>
        <td height="30px" style="height: 30px; line-height: 30px; color: #ffffff; text-align: left;"><br /></td>
       </tr>
       <tr>
        <td style="text-align: center;">
         <div>  <a id="mail_member" goods-type="cloudFile" utm-source="cloudFile-remindmail" sys="1" file-ids="213914726,213933009,213933028" target="_blank" href="https://count.mail.163.com/statistics/48Cy55.do?product=notify_center_mc_mail_106&amp;domain=email&amp;uid=m18352754765@163.com&amp;area=8&amp;orgParams=utm_source%3DcloudFile-remindmail" style="
            width:128px;
            margin:0 auto;
            background-color: #3B78DD;
            border-radius: 2px;
            color: #ffffff;
            display: inline-block;
            font-size: 16px;
            line-height: 40px;
            text-align: center;
            text-decoration: none;
            -webkit-text-size-adjust: none;
            mso-hide: all;
            ">立即重置</a> 
         </div></td>
       </tr>
       <tr>
        <td height="50px" style="height: 50px; line-height: 50px; color: #ffffff; text-align: left;"><br /></td>
       </tr>
       <tr>
        <td style="font-size: 14px; line-height: 24px; height: 24px; font-weight: bold; text-align: left; color: #555555;">开通邮箱会员，除了超大附件保存期提至50天，更有</td>
       </tr>
       <tr>
        <td style="text-align: left;">
         <center>
          <table class="direct-mail-table" role="presentation" width="650px" style="border-collapse: collapse; border-spacing: 0px; width: 650px; margin-left: auto; margin-right: auto;">
           <tbody>
            <tr>
             <td width="33.33%" style="width: 33.33%; text-align: center;"><p style="height: 30px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="40" width="40" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/f0811f29c4323e891bfd4bb9bb7c255f.jpg" alt="" style="width: 40px; height: 40px;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 20px; color: #999999; margin-top: 0px; margin-bottom: 0px;">大附件极速下载</p></td>
             <td width="33.33%" style="width: 33.33%; text-align: center;"><p style="height: 30px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="40" width="40" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/da1e217d23f26357e40424519e91cd94.jpg" alt="" style="width: 40px; height: 40px;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 20px; color: #999999; margin-top: 0px; margin-bottom: 0px;">海量PPT模板</p></td>
             <td width="33.33%" style="width: 33.33%; text-align: center;"><p style="height: 30px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="40" width="40" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/5bfa0fbddd8488e1e657dceeabb056c6.jpg" alt="" style="width: 40px; height: 40px;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 20px; color: #999999; margin-top: 0px; margin-bottom: 0px;">群发特权</p></td>
            </tr>
            <tr>
             <td width="33.33%" style="width: 33.33%; text-align: center;"><p style="height: 30px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="40" width="40" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/8f5683e0091a30e30c3ac5ca889e7ca8.jpg" alt="" style="width: 40px; height: 40px;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 20px; color: #999999; margin-top: 0px; margin-bottom: 0px;">超大存储空间</p></td>
             <td width="33.33%" style="width: 33.33%; text-align: center;"><p style="height: 30px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="40" width="40" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/59429f0a3addc87f31189301c9cabb01.jpg" alt="" style="width: 40px; height: 40px;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 20px; color: #999999; margin-top: 0px; margin-bottom: 0px;">PDF格式转化</p></td>
             <td width="33.33%" style="width: 33.33%; text-align: center;"><p style="height: 30px; margin-top: 0px; margin-bottom: 0px;"><br /></p><img height="40" width="40" src="https://onegoods.nosdn.127.net/resupload/2021/6/2/87eed75fe1d04fe73edf0d8b5cb45d1e.jpg" alt="" style="width: 40px; height: 40px;" /><p style="height: 10px; margin-top: 0px; margin-bottom: 0px;"><br /></p><p style="font-size: 14px; line-height: 20px; color: #999999; margin-top: 0px; margin-bottom: 0px;">免广告</p></td>
            </tr>
           </tbody>
          </table>
         </center></td>
       </tr>
      </tbody>
     </table>
    </center></td>
  </tr>
  <tr>
   <td height="60px" style="height: 60px; line-height: 60px; color: #ffffff; text-align: left;"><br /></td>
  </tr>
  <tr>
   <td height="52" style="background: #f8f9fa; color: #cccccc; font-size: 14px; line-height: 20px; height: 52px; text-align: center;">— 网易邮件中心 —</td>
  </tr>
 </tbody>
</table>
</center> 
</div>  

<img src="https://count.mail.163.com/beacon/upoint.gif?type=notify_center&amp;no=mc_mail_106&amp;uid=m18352754765@163.com&amp;date=20250315&amp;domain=163.com" style="display:none" />
`;

export default App;
