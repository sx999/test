
    //图片上传回显
    function add(){
        $("#uptexticon").append("<span class='glyphicon glyphicon-remove' id='texticon'></span>")
        $("#imgdiv").append("<img src='' id='newimg'>")
    }
    //上传图片回显
    function showImg(e){
        
        $("#newimg").remove();
            console.log($(e))
            var file = $(e)[0].files[0]; //获取文件信息
            var imgdata = '';
            if(file){
                var reader = new FileReader()  //调用FileReader
                reader.readAsDataURL(file);  //将文件读取为DataUrl(base64)
                console.log(reader)
                reader.onload = function(evt){
                    //读取操作完成时触发
                    console.log(evt)
                   imgbase =  evt.target.result;
                    console.log(evt.loaded)
                    if(evt.loaded <= 10485760){  
                        $("#bigImg").hide()   
                        add()
                        $("#newimg").attr('src',evt.target.result);  //将img标签的src 绑定为DataUel
                        $("#texticon").click(function(){ 			//删除图片
                            console.log("删除图片")
                            $("#newimg").remove()   
                            $("#texticon").remove() 
                        })
                    }else{
                        $("#bigImg").show()    //如果图片过大显示
                    }
                }
            }
            else{
                alert("图片上传失败");
                $("#texticon").hide()   
            }
    }
    // 浏览器滑动高度
    $(window).scroll(function () {
        $('.data-address').hide()

        var top = $(this).scrollTop();
        // console.log(top)
        if(top>350){
            $("#ring-up").css({'display':'block',});
        } else {
            $("#ring-up").css('display','none');
        }
    });
    //判断是否 是微信浏览器
    $(function(){ 
        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
        if (isWeixin) {
            $("#btn-data").css({'lineHeight':'22px'})
            
            $('::-webkit-input-placeholder').css({'top':'1px'})
        }else{
            $("#btn-data").css({'lineHeight':'0'})
            $('::-webkit-input-placeholder').css({'top':'0'})
        }
    }); 
     //给body添加类
     function addFix(){
        $('body').addClass('fix')
    }
     //给body删除类
    function removeFix(){
        $('body').removeClass('fix');
    } 
        
    // 浏览器宽度
    // $(document).ready(function(){
    //     let _width =  $(window).width()
        
    //     if(_width<=280){
    //         $("#name").css("padding-left","13%")
    //     }else{
    //         $("#name").css("padding-left","9%")
    //     }
    // })
    //验证姓名
    function nameCheck() {
        let reg = /^[\u4e00-\u9fa5]{2,6}$/;
        let name = $("#name").val();
        if (!reg.test(name) || name=='') {
            $("#name").parent().removeClass("has-success") 
            $("#name").parent().addClass("has-error")
            return false;
        }else{
            $("#name").parent().removeClass("has-error") 
            $("#name").parent().addClass("has-success")
            k++
        }
    }
     //性别
    function radio(){
        let sex =  $("select[name='sex']").val()
    	 console.log(sex)
    	if(sex == ""){
            alert("性别不能为空")
    	}else{
            if( $("#identity").val().slice(-2,-1) != ""){
                sexSpanPop()
                console.log(k)
            }else{
                k++
                console.log(k)
            }
           
    	}
    }
    //身份证验证
    function idEntity(){
        let identity = $("#identity").val();
        console.log(identity)
        //身份证正则
        let reg =/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; 
        if(!reg.test(identity) || identity==""){
            $("#identity").parent().removeClass("has-success")
            $("#identity").parent().addClass("has-error")
        }else{
            $("#identity").parent().removeClass("has-error")
            $("#identity").parent().addClass("has-success")
            k++
            console.log(k)
            sexSpanPop()
        }
    }

    function sexSpanPop(){
        let judegAge =   $("#identity").val().slice(-2,-1)   //身份证 性别
        let sex =  $("select[name='sex']").val() //所选性别
        if(judegAge%2 != sex){
            $(".sexspan").hide()
        }else{
            $(".sexspan").show()
            if(k<0){
                k =0
                console.log(k)
            }else{
                return
            }
           
        }
    }

    // 浏览器加载完成添加 数据 (类别/组别)
    $(document).ready(function(){
        $.ajax({
            type:'post',
            url:'http://192.168.100.17:8081/CultureContestantController/getCategory',
            async:false,
            dataType:'json',
            success:function(getCategory){
                console.log(getCategory)
                for(var i=0;i<getCategory.data.length;i++){
                var j = getCategory.data[i]
                    $(".checkdiv-aa").append(`
                    <div class="checkdiv">
                        <input type="checkbox" name="categoryName" value="${j.categoryName}">${j.categoryName}
                        <input type="hidden" value="${j.id}" class="boot">
                    </div>
                    `)
                }
            }
        })
        $.ajax({
            type:'post',
            url:'http://192.168.100.17:8081/CultureContestantController/getGroup',
            async:false,
            dataType:'json',
            success:function(getGroup){
                console.log(getGroup)
                for(var i=0;i<getGroup.data.length;i++){
                    var j = getGroup.data[i]
                $(".group-click-on").append(`
                        <div class="checkdiv bor-none">
                            <input type="checkbox" name="groupName" value="${j.groupName}">${j.groupName}
                            <input type="hidden" value="${j.groupId}" class="boota">
                        </div>
                `)
                }
            }
        })
        adddd()  
    })
    //类别 //单选  (组别)
    function adddd(){
        $(":checkbox[name='categoryName']").parent().click(function(){
            $('.boot').removeAttr('name')
            var flag=$(this).children().prop("checked");
            if(flag){
                $(this).children().prop('checked',false);
                $(this).children('input[type=hidden]').removeAttr('name');
            }else {	
                $(":checkbox[name='categoryName']").prop('checked',false);
                $(this).children().prop('checked',true);
                $(this).children('input[type=hidden]').attr('name','id');
                k++
            }
        })
        //单选  (组别)
        $(":checkbox[name='groupName']").parent().click(function(){
            $('.boota').removeAttr('name')
            var flag=$(this).children().prop("checked");
            if(flag){
                $(this).children().prop('checked',false);
                $(this).children('input[type=hidden]').removeAttr('name');      
            }else {	
                $(":checkbox[name='groupName']").prop('checked',false);
                $(this).children().prop('checked',true);	
                $(this).children('input[type=hidden]').attr('name','groupId');
                k++
            }
        })
    }

    // 组别点击
    $('#group-click').click(function(){
        $(this).children().attr('name','isThat')
        $('#works').children().removeAttr('name')
        $(this).css({'color':'#3084C3'})
        $("#works").css({'color':'#000000'})
        if( $('.group-click-on').attr('data-show')=='true'){
            $(this).parent().css({'height':'220px'})
            $('.group-click-on').attr('data-show','false').show()
        }else{
            $('.group-click-on').attr('data-show','true').hide()
            $(this).parent().css({'height':'94px'})
            $(this).css({'color':'#000000'})
        }
    })
    $('#works').click(function(){
        $(this).children().attr('name','isThat')
        $('.group-click-on').hide()
        $(this).css({'color':'#3084C3'})
        $('#group-click').css({'color':'#000000'})
        $('#group-click').children().removeAttr('name')
        if($(this).attr('data-show1') == 'true'){
            $(this).attr('data-show1','fasle')
        }else{
            $(this).attr('data-show1','true')
        }
    
    })

    //电话
    let telvalue =  0;
    function Phone(){
        let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; //手机
        // let rega=/^[0][1-9]{2,3}-[0-9]{5,10}$/; //座机
        let tel = $("#phone").val();
        if(!reg.test(tel) || tel==''){
            $("#phone").parent().removeClass("has-success")
            $("#phone").parent().addClass("has-error")
            return false;
        }else{
            $("#phone").parent().removeClass("has-error")
            $("#phone").parent().addClass("has-success")
            k++
            telvalue++
        }
    }
    // 验证码 倒计时
    let countNum =10;  //初始倒计时
    $("#btn-data").click(function(){
        if(telvalue != 0){
              //短信提示show
            $("#note-pro").show() 
            $(this).attr("disabled","disabled")   //点击之后让button 不可用
            $(this).css({'color':'#d3d7d4'})
            //倒计时
            setTime($(this))
            //ajsx发送http请求  调用FUN
            ajaxData()
            
        }else{
            alert("请检查手机号是否正确")
        }
    })
    //计时器
    function setTime(el){
      if(countNum == -1){
          el.removeAttr("disabled")  //移除属性
          el.css({'color':'#52B5FF'})
          el.html("发送验证码")
          countNum =10;
          return
      }else{
          el.html(`重新发送(${countNum}s)`)
          countNum--
      }
      setTimeout(function(){
         setTime(el)
      },1000)
    }
    // 地址
    $("#address").blur(function(){
       //显示输入提示
    Import()
       if($(this).val() == ""){
        $('.data-address').hide()
        $(this).parent().removeClass("has-success")
        $(this).parent().addClass("has-error")
          return false
       }else{
        $('.data-address').show()
        $(this).parent().removeClass("has-error")
        $(this).parent().addClass("has-success")
          k++ 
       }
       console.log(k)
    })

    // 后端交互 发送验证码  FUN
    function ajaxData(){
            let telData  = $("#phone").val()
            console.log(telData,"*****")
            $.ajax({
            type: "post",          //提交方法类型
            url: 'http://192.168.100.17:8081/SmsController/dsd?Mobile='+telData,              //地址
            // data: telData,
            async:true,           //是否异步
            dataType: "json",   //数据类型
            success:function(res){
                console.log("发送success",res)
            },
            error:function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR.responseText,"---当前状态")
            console.log(jqXHR.status,"---状态码")     
            console.log(jqXHR.statusText,"---状态码错误信息")
            console.log(jqXHR.readyState,"---响应文本信息")
            console.log(textStatus,"---返回状态", errorThrown,"---抛出异常")
            },
        })
    }

    // 判断验证码
    var datatrue = '';
    function Decide(){
        let telData  = $("#phone").val()
        let note = $("#note").val()
        
        $.ajax({
            type:"post",    
            url:"http://192.168.100.17:8081/SmsController/dd?Content="+note+"&phone="+telData,
            async:false,
            dataType:'json',
            success:function(data){
                console.log("验证success",data)
                datatrue = data
            }, 
            error:function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR.responseText,"---当前状态")
                console.log(jqXHR.status,"---状态码")     
                console.log(jqXHR.statusText,"---状态码错误信息")
                console.log(jqXHR.readyState,"---响应文本信息")
                console.log(textStatus,"---返回状态", errorThrown,"---抛出异常")
            }
        });
        return datatrue 
    }
    // 高德输入提示接口
    function Import(){
        $('.data-address').empty();
        let addressValue = $("#address").val()
        $.ajax({
            type:'get',
            url:'https://restapi.amap.com/v3/assistant/inputtips?&city=410000&citylimit=true&keywords="'+addressValue+'"&key=910716c512c4e796eb7c4cfd30dab1aa',
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data)
                var  addressData = data.tips
                for(var i=0;i<addressData.length;i++){
                    var j = addressData[i]
                $('.data-address').append(`<div class="dataEach">${j.name}</div>`)
                }
                $('.dataEach').click(function(){
                    $('#address').val($(this).text())
                    $('.data-address').hide()
                })
            },
            error:function(error){
                console.log(error)
            }
        })
    }
    // 提交 接口
    function SendAjax(){
        var params = $('#personForm').serialize(); 
        params = decodeURIComponent(params,true);  //解码
        var DataDeal = {
            //将从form中通过$('#form').serialize()获取的值转成json
            formToJson: function (data) {
                data=data.replace(/&/g,"\",\"");
                data=data.replace(/=/g,"\":\"");
                data="{\""+data+"\"}";
                return data;
                },
        };
        var jsonData=DataDeal.formToJson(params);//转化为json
        console.log(jsonData)
        $.ajax({
            type: "POST",   //提交方法类型
            url: "http://192.168.100.17:8081/CultureContestantController/setEnroll",    //地址
            data:jsonData,
            async:true,
            dataType: "json",   //数据类型
            contentType:"application/json",
            success: function (data) {
                console.log(data)   //打印服务端数据
                // if(response.resultCode == 200){
                //     alert("success")
                // };
                // window.location.href = "/submit.html";
            },
            error : function(error) {
                alert("异常")
                console.log(error)
            }
        });
    }
    //判断提交条件
    var k = 0;
    //点击提交
    $("#btn").click(function(){
        console.log(k)
        let ifgroup =  $(":checkbox[name='groupName']:checked").val()
        Decide() 
        console.log(datatrue)
        if(k>=7){
            if(datatrue.code != 200){alert (datatrue.mag)} // 验证码是否正确
            else{
                SendAjax()  //提交form表单
                alert ('提交成功')
                // if(ifgroup == "小学组"){
                //         var  newUrl =  "/submit.html";
                //         $("form").attr("action",newUrl )
                //     }else{   
                //         return false
                //     }
                $("form")[0].reset();// 提交后重置表单 
            }
        }else{
            alert ("输入不完整")
            $("form")[0].reset();// 提交后重置表单 
        }
    })
    
    //提交弹出 图片
    $("#imgee").click(function(){
        $("#popimg").show()
       
        addFix()
        setTimeout(function(){
            $("#popimg").hide()
            
            removeFix()
        },5000)
    })
   