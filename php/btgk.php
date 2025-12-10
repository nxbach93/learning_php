<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .numb {
            margin-right: 15px;
        }
    </style>
</head>
<body>
    <h1>Bài tập in ra dãy số từ 1 đến 100 (Số chẵn in đậm, chữ màu đỏ, Số lẻ in đậm, nghiêng, chữ màu xanh)</h1>
    <br>
    <?php
    for( $i=1; $i<=100; $i++)
        {
            if($i % 2 == 0)
            {
                echo "<b><span class='numb' style='color:red;'>$i</span></b>";
            }
            else
            {
                echo "<b><i><span class='numb' style='color:green;'>$i</span></i></b>";
            }
        }
        ?>
</body>
</html>