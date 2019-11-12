<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <style>
        *{
            margin: 0;
            padding: 0;

        }
        .nav{
            list-style:none;
            width: 300px;
            height: 50px;
            background: red;
            margin: 100px auto;
        }
        .nav>li{

            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            float: left;
        }

        .sub{
            list-style:none;
            background: mediumpurple;
            display: none;

        }
    </style>
    <script>
        $(function(){
            $(".nav>li").mouseenter(function () {
                $(this).children(".sub").stop().slideDown(500)
            })
            $(".nav>li").mouseleave(function(){
                $(this).children(".sub").stop().slideUp()
            })
        })
    </script>
</head>
<body>
<ul class="nav">
    <li>一级菜单
        <ul class="sub">
            <li>二级菜单1</li>
            <li>二级菜单1</li>
            <li>二级菜单1</li>
            <li>二级菜单1</li>
            <li>二级菜单1</li>
            <li>二级菜单1</li>
            <li>二级菜单1</li>
        </ul>
    </li>

</ul>
</body>
</html>
