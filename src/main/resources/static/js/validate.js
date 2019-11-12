
/**
 * �ж��ַ����Ƿ�Ϊ��
 * @str У���ַ���
 * @return	У��ͨ������true,���򷵻�false
 * */
function is_empty(str) {
    if ((str == null) || (str.length == 0) || trim(str).length ==0){
    	return true;
    }else{
    	return false;
    }
}

/**
 * ȥ��ǰ��ո�
 * @param str
 * @returns
 */
function trim(str){   
    str = str.replace(/^(\s|\u00A0)+/,'');   
    for(var i=str.length-1; i>=0; i--){   
        if(/\S/.test(str.charAt(i))){   
            str = str.substring(0, i+1);   
            break;   
        }   
    }   
    return str;
}

/**
 * �ж��ַ������ȣ�����һ�������򷵻ذ������ֽڴ���
 * @s У���ַ���
 * @return	����
 * */
function get_length(s) {
	var sLength = 0;
	
	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (c.charCodeAt(0) < 256)
			sLength += 1;
		else
			sLength += 2;
	}
	return sLength;
}

/**
 * �ж϶����ֵ�Ƿ�Ϊ����
 * @num У���ַ���
 * @return	У��ͨ������true,���򷵻�false
 * */
function is_number(num) {
	if((num==null)||(num=="")) {
	 	return true;
	}
	if(isNaN(num)) {
		return false;
	}else {
		return true;
	}
}

/**
 * ���棬�绰������֤(����Ϊ��)
 * @str У���ַ���
 * @return	У��ͨ������true,���򷵻�false
 * */
function is_phone(phone) {
	/**
		�������ŵ�1λΪ0
			���ŵ�2λΪ��Ȼ��
			���ŵ�3-4λΪ0-9������
			========================
			���ź�����"-"����
			========================
			�绰�����1λΪ��Ȼ��
			�绰�����2�Ժ�Ϊ0-9����
	*/
	if(is_empty(phone)) {
		return true;
	}
	var reg=/^(0)([1-9])(\d)(\-)([1-9])(\d{7})$|(0)([1-9])(\d{2})(\-)([1-9])(\d{6,7})$/;
	if(!reg.test(phone)) {
		return false;
	} else {
		return true;
	}
		
		
}

/**
* �ƶ��绰���������֤(����Ϊ��)
* @mobile У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_mobile(mobile) {   

	if (is_empty(mobile)) {
			return true;
	}

	var reg=/^(18|13|15|14)(\d{9})$/;
	
	/**
			�����ƶ��绰�����1-2λΪ13|15|18��ͷ
				=========================
				����Ϊ0-9������
	*/
	
	if(reg.test(mobile)) {
		return true;
	} else {
		return false;
	}
}

/**
* �ж��Ƿ�Ϊ��Ч��mail��ַ(����Ϊ��)
* @email У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_email(email) {
	if (is_empty(email)) {
		return true;
	}
	var reg =  /^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/gi;
	if (reg.test(email)) {
		return true;
	}
	else {
		return false;
	}
}

/**
* ����Ƿ�����Ƿ��ַ�\+,;/*<>��.`@%&����()^=!
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_illegal_char(str){
	if(is_illegal_char_reg(str)) {
		return true ;
	}
	if((str.indexOf("*") != -1) || (str.indexOf(".") != -1)) {
	   return true;
	}
	
	return false;
}

/**
* ����Ƿ�����Ƿ��ַ�  (��������*)
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_illegal_char_reg(str){
	if(str.indexOf("<") > -1||str.indexOf(">") > -1 ||
       str.indexOf("\"") > -1||str.indexOf("&") > -1||
       str.indexOf("'") > -1||str.indexOf(" ") > -1 ||
       str.indexOf("+") > -1||str.indexOf(",") > -1||
       str.indexOf(";") > -1||str.indexOf("/") > -1||
       str.indexOf("`") > -1||str.indexOf("@") > -1||
       str.indexOf("%") > -1||str.indexOf("��") > -1||
       str.indexOf("��") > -1||str.indexOf("��") > -1||
       str.indexOf("��") > -1||str.indexOf("��") > -1||
       str.indexOf("#") > -1||str.indexOf("$") > -1||
       str.indexOf("^") > -1||str.indexOf("=") > -1||
       str.indexOf("!") > -1||str.indexOf("(") > -1||
       str.indexOf(")") > -1||str.indexOf('~') > -1||
       str.indexOf("|") > -1||str.indexOf('?') > -1||
       str.indexOf("\\")> -1){
		   return true;
    }
    return false;
}

/**
* ����Ƿ�����Ƿ��ַ�
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_illegal_char_reg1(str){
	if(str.indexOf("<") > -1||str.indexOf(">") > -1 ||
       str.indexOf("\"") > -1||str.indexOf("&") > -1 ||
       str.indexOf("'") > -1||str.indexOf(" ") > -1 ||
       str.indexOf("+") > -1||str.indexOf(",") > -1||
       str.indexOf(";") > -1||str.indexOf("/") > -1||
       str.indexOf("`") > -1||str.indexOf("@") > -1||
       str.indexOf("%") > -1||str.indexOf("��") > -1||
       str.indexOf("��") > -1||str.indexOf("��") > -1||
       str.indexOf("��") > -1||str.indexOf("��") > -1||
       str.indexOf("#") > -1||str.indexOf("$") > -1||
       str.indexOf("^") > -1||str.indexOf("=") > -1||
       str.indexOf("!") > -1||str.indexOf("*") > -1||
       str.indexOf("(") > -1||str.indexOf(")") > -1||
       str.indexOf('~') > -1||str.indexOf("|") > -1||
       str.indexOf('?') > -1||str.indexOf("\\")> -1) {
		   return true;
    }
    return false;
}

//��������Ƿ��ַ�
function checkLawlessStr(str){
    if(str.indexOf("<") > -1||str.indexOf(">") > -1 ||
       str.indexOf("\"") > -1||str.indexOf("&") > -1||
       str.indexOf("'") > -1||str.indexOf(" ") > -1||
       str.indexOf("��") > -1||str.indexOf("��") > -1||
       str.indexOf("��") > -1||str.indexOf("��") > -1){
        return false;
    }
    return true;
}

function check_sso_rules(str){
    if(str.indexOf("<") > -1||str.indexOf(">") > -1 ||
       str.indexOf("&") > -1||str.indexOf("'") > -1 ||
       str.indexOf("��") > -1||str.indexOf("��") > -1 ||
       str.indexOf("��") > -1||str.indexOf("��") > -1 ||
       str.indexOf("\"") > -1||str.indexOf("\\") > -1){
        return false;
    }
    return true;
}


/**
* ��������Ƿ����㳤������
* @str У���ַ���
* @max �ַ�����󳤶�
* @return	У��ͨ������true,���򷵻�false
* */
function is_limit_len(str,max) {
	var len = get_length(str);
	
    if(len>max) {
        return false;
    }
    return true;
}

/**
* У��һ���ַ����Ƿ����IP��ַ�ø�ʽ(����ipv4/ipv6)
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_ip(str) {
	var rs = false;
	
	rs = is_ip_v4(str);
	if(!rs) {
		rs = is_ip_v6(str);
	}
	return rs;
}


/**
 * ��֤�Ƿ�������
 */
function is_domain_name(str) {
	var temprule = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?$/;

	if (temprule.test(str)){
		return true;
	}
	return false;
}


/**
* У��һ���ַ����Ƿ����ipv4��ַ�ø�ʽ
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_ip_v4(str) {
   var rs = true;
   
   if(str == null || str.length ==0){
		return false; 
   }
   var reg=/^((\d+)\.(\d+)\.(\d+)\.(\d+))$/;
   if(reg.test(str)) {
       var ary = str.split('.');
       for(var i=0;i<ary.length;i++){
          if(ary[i]>255 || ary[i]<0){
             rs = false;
             break;
          }
       }
       if(rs){
         if(ary!=null && ary.length==4){
             if(ary[0]==0 || ary[3]==0){
                 rs = false;
             }else {
                 rs = true;
             }
         }
      }
    } else {
         rs = false;
    }

    if(!rs){
      return false;
    }else{
      return true;
    }
}

/**
* У��һ���ַ����Ƿ����ipv6��ַ�ø�ʽ
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_ip_v6(str) {  
	
	if(str == null || str.length ==0){
		return false; 
	}

    //CDCD:910A:2222:5498:8475:1111:3900:2020   ��ʽ

    var patrn=/^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i;   

    var r=patrn.exec(str);

    if(r) {  
    	
        return true;  
    }  

    if(str=="::"){  

        return true;  
    }  

    //F:F:F::1:1 F:F:F:F:F::1 F::F:F:F:F:1��ʽ  

    patrn=/^(([0-9a-f]{1,4}:){0,6})((:[0-9a-f]{1,4}){0,6})$/i;   

    r=patrn.exec(str);  

    if(r) {      

        var c=cLength(str);  

        if(c<=7 && c>0){  

            return true;  

        }  

    }                  

    //F:F:10F::  ��ʽ

    patrn=/^([0-9a-f]{1,4}:){1,7}:$/i;   

    r=patrn.exec(str);  

    if(r) {  

        return true;  

    }  

    //::F:F:10F  ��ʽ

    patrn=/^:(:[0-9a-f]{1,4}){1,7}$/i;   

    r=patrn.exec(str);  

    if(r){  

        return true;  

    }  

    //F:0:0:0:0:0:10.0.0.1��ʽ  

    patrn=/^([0-9a-f]{1,4}:){6}(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/i;   

    r=patrn.exec(str);  

    if(r){  

        if(r[2]<=255 && r[3]<=255 &&r[4]<=255 && r[5]<=255 )  

        return true;  

    }  

    //F::10.0.0.1��ʽ  

    patrn=/^([0-9a-f]{1,4}:){1,5}:(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/i;   

    r=patrn.exec(str);  

    if(r) {  

        if(r[2]<=255 && r[3]<=255 &&r[4]<=255 && r[5]<=255 )  

            return true;  

    }  

    //::10.0.0.1��ʽ  

    patrn=/^::(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/i;   

    r=patrn.exec(str);  

    if(r){  

        if(r[1]<=255 && r[2]<=255 &&r[3]<=255 && r[4]<=255)  

            return true;  
    }  
	
	 //::F.10.0.0.1��ʽ 
	patrn=/^::([0-9a-f]{1,4})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/i;   

    r=patrn.exec(str);  
    if(r) {  

        if(r[2]<=255 && r[3]<=255 &&r[4]<=255 && r[5]<=255)  

            return true;  

    }
	 
    return false;  
}

/**
* У��һ���ַ����Ƿ���϶˿ڵø�ʽ
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_port(port) {
    //return is_number(port) && parseInt(port) > 0 && parseInt(port)<= 65536;
	return /^\d+$/.test(port.value) && isInteger(port) && parseInt(port.value) > 0 && parseInt(port.value)<= 65536;
}

function isInteger(obj) {
    if((obj.value==null)||(obj.value=="")) return true; 
	if(isNaN(obj.value) || (obj.value.indexOf('.') !=-1) || (obj.value.lastIndexOf('-') !=-1))
	{
		return false;
	}else{
		return true;
	}
}//end function

/**
* У��һ���ַ����Ƿ�Ϊ��Ч����
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_count(str) {
    return is_number(str) && parseInt(str) > 0;
}

/**
* У��һ���ַ����Ƿ�������Ļ�ȫ���ַ�
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_chinese(str) {
	var reg = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
	
	if (reg.test(str)) {
		return true;
	}
	return false;
}

/**
* У��һ���ַ����Ƿ�Ϊ��ȷ��ʽ��MAC��ַ
* @str У���ַ���
* @return	У��ͨ������true,���򷵻�false
* */
function is_mac(str){	
	var temp = /[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}/;
	
	if (temp.test(str))
	{
	     return true;
	}
	return false;
}

/**
 * �Ƿ�ѡ�и�ѡ��
 * @checkbox ��ѡ������
 * @return	У��ͨ������true,���򷵻�false
 */
function is_checked(checkbox) {
	
	var checkboxs = document.getElementsByName(checkbox) ;
	
	for(var i = 0 ; i < checkboxs.length ; i++ ){
		if(checkboxs[i].checked){
			return true;
		}
	}
	
	return false ;
	
}

