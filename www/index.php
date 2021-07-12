<?php
      // header("Access-Control-Allow-Origin:*");
      // // 响应类型
      // header('Access-Control-Allow-Methods:POST');
      // // 响应头设置
      // header('Access-Control-Allow-Headers:x-requested-with, content-type');
      // $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);;

      // $json = json_encode($arr);  //json 数据
      // print_r($json);
      // $name = $_POST("name");
      // $sex = $_POST('sex');
      // $idCard = $_POST('idCard');
      // $categoryName = $_POST('categoryName');
      // $groupName = $_POST("groupName");
      // $company = $_POST('company');
      // $phone = $_POST('phone');

      $params = $_POST('params');
      print_r($params)

      // echo "<h3>姓名:".$name."</h3>";
      // echo "<h3>性别:".$sex."</h3>";
      // echo "<h3>类别:".$categoryName ."</h3>";
      // echo "<h3>组别:".$groupName."</h3>";
      // echo "<h3>身份证:".$idCard."</h3>"; 
      // echo "<h3>电话号:".$phone."</h3>";
      // echo "<h3>地址:".$company."</h3>";



      // echo "000";
      //   $name = $_POST["name"];
      //   // $name = $_GET["name"];
      //   $sex= $_POST["sex"];
      //   // if($sex == 0){
      //   //    $sex = "女";
      //   // }elseif($sex == 1){
      //   //    $sex = "男";
      //   // }

      //   $tel = $_POST["tel"];         //手机号
      //   $classes = $_POST["classes"];   //类别
      //   $group = $_POST["group"];    //提交的小组
      //   $address = $_POST["address"];      //地址
      //   $inaddress = $_POST["inAddress"];   //详细地址

    
      //   $array = array("name:".$name,"sex:".$sex,"tel:".$tel,);
      //   $result = json_encode($array);
      //   echo  $result;
      //   $idEntity= $_POST["identity"];
      //   // 生日
      //   $year= $_POST["year"];
      //   $month= $_POST["month"];
      //   $day= $_POST["day"];

 
      //   $age = $_POST["age"];          //年龄
      
    
      //   $wechat = $_POST["wechat"];      //微信号
      //   $compony = $_POST["compony"];   //公司
        
      //   $school = $_POST["school"];   //学校
      //   $cresume = $_POST["resume"];   //个人简介  
      //   //图片
      //   $image = $_FILES['ImageFile'];   
      //  //图片路径
      //    $path =  $image['tmp_name'];  //图片名字
      //   $a = $_POST["evt.target.result"];
      //   echo "$a";
      //    $html = "<img src='".$path."'/>";
        // echo "<h3>姓名:".$name."</h3>";
      //   echo "<h3>性别:".$sex."</h3>";
      //   echo "<h3>类别:".$classes."</h3>";
      //   echo "<h3>组别:".$group."</h3>";
      //   echo "<h3>生日:".$year."-".$month."-".$day."</h3>"; 
      //   echo "<h3>年龄:".$age."</h3>";
      //   echo "<h3>电话号:".$tel."</h3>";
      //   echo "<h3>地址:".$address."/".$inaddress."</h3>";
      //   echo "<h3>微信号:".$wechat."</h3>";
      //   echo "<h3>公司:".$compony."</h3>";
      //   echo "<h3>学校:".$school."</h3>";
      //   echo "<h3>个人简介:".$cresume."</h3>";
      //   print_r($image);
      //   echo "<h2>图片名字:".$image['name']."</h2>";
      //   echo "<h2>图片路径:".$image['tmp_name']."</h2>";
      //   echo "<h2>图片类型:".$image['type']."</h2>";
      //   echo "<h2>图片大小:".$image['size']."</h2>";
      //   $error = $image['error'];
      //  echo "<pre>";
      //   echo $html;
      // echo "</hr>";
 ?>