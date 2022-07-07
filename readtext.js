
        function readtext() {
            var value = document.getElementById("searchif").value
            var album1=new Array("1874","随意门","明年今日","人来人往","心里有鬼","我有我爱你","季军","防不胜防","两名男子街头相遇","黑面");
            var album2=new Array("可爱女人","完美主义","星晴","娘子","斗牛","黑色幽默","伊斯坦堡","印第安老斑鸠","龙卷风","反方向的钟");
            var album3=new Array("拆东墙","医生","降温","想象之中","河山大好","千百度","毁人不倦","双人旁","敬酒不吃","微博控");
            var album4=new Array("带我去找夜生活","スパークル","无人的海边","Perfect","这是我一生最勇敢的瞬间","this is what falling in love feels like","今夜无法入眠","岛屿","orion","没有名字的夜晚");
            if(album1.includes(value))
                window.location.href='index1.html';
            else if(album2.includes(value))
                window.location.href='index2.html';
            else if(album3.includes(value))
                window.location.href='index3.html';
            else if(album4.includes(value))
                window.location.href='index4.html';
            else
                alert("曲库中暂无此歌曲")
        }