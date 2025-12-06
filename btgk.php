<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .numb {
            margin-right: 10px;
            white-space: nowrap;
        }
    </style>
</head>
<body>
    <?php
    for( $i=1; $i<=100; $i++)
        {
            //Số chẵn in đậm, chữ màu đỏ (red)
            // Số lẻ in đậm, nghiêng, chữ màu xanh (green)
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