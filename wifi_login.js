(function(){
	var wShell=WScript.CreateObject("WScript.Shell"),
		objService=GetObject("winmgmts:{impersonationLevel=impersonate,authenticationLevel=PktPrivacy}!//./root/cimv2"),
		colProcess,
		nPid;
		wShell.Exec("%windir%\\system32\\cmd.exe /c \"netsh wlan connect name=ShanghaiTech\"");
		WScript.Sleep(500);
		wShell.Exec("%windir%\\system32\\cmd.exe /c \"start C:\\Users\\admin\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe https://controller.shanghaitech.edu.cn:8445/PortalServer/customize/1478262836414/pc/auth.jsp\"");
		WScript.Sleep(5000);
		wShell.SendKeys("{TAB}");
		WScript.Sleep(300);
		wShell.SendKeys("{TAB}");
		WScript.Sleep(300);
		wShell.SendKeys("{TAB}");
		WScript.Sleep(300);
		wShell.SendKeys("{TAB}");
		WScript.Sleep(300);
		wShell.SendKeys("{ENTER}");
		WScript.Sleep(3000);
		wShell.SendKeys("^{F4}");
})();