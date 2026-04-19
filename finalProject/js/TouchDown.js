//Top HUD

const $master = $('#sysState');
const $masterGen = $('#masterGen');
const $time = $('#TimeState');
const $masterNameArr = [
    {
        name:"CAUTION",
        color: ["var(--bg)", "var(--hudWarn)"],
        string: [
            "TOO FAST", "OFF LEVEL", "HI HEAT"
        ]
    },
    {
        name:"WARN",
        color: ["var(--effect)", "var(--bg)"],
        string:["PULL UP", "LEVEL OUT", "OVERHEAT"]

    },
    {
        name: "ALERT",
        color: ["var(--hudWarn)", "var(--valueTxt)"],
        string: ["BRACE!", "THRUST T/OUT"]
    },
    {
        name: "System:",
        color: ["", ""],
        string: ["STAND BY"]
    }

];
var $gameComplete = false;
var $TicToc;
var inertiaCoEf = 1;
var inertia = 0;
var angle = 0;
var thrustFlag = false;
var heatMult = 1;
var heatRise = 0;


$(function () {
    console.log("DOM is ready!");
    alert("Welcome to TouchDown \n" +
        "You are in charge of safely landing your ship\n"
    );
    alert("Lets cover the HUD indicators you will need to use\n" +
        "\nMaster: \nThis section will provide brief data on thing you will need to take action on\n" +
        "\nDeltaT:\nThis will log the overall time it took from thrust to touchdown\n"
    );
    alert("Left SideBar HUD:\nThis indicates your rate of decent\nthe rectangle will change from:\n     Orange (in transition)\n     Green (safe rate to land)\n     Red (rate too high)" +
            "\nThe rectangle and rate of descent will flow down as you get closer to the ground\n"
        );
    alert("Right SideBar HUD:\nThis indicates your thrust temps called Temprature Delta\nTwo Arrows represent the left (<) and right(>) thruster\n" +
        "The indicators will move bottom to top as they get hotter\n" +
        "The Side Bar will transition from:\n     Yellow: Caution\n     Red: OverHeat\n" +
        "If one thruster overheats, the whole propulsion system will shutdown until cooled");
    
    SelfTest();
    if ($(window).width() >= 780) {
        console.log("Desktop User");
        desktopControl();
    }
    else {
        console.log("Mobile User");
        //mobileControl();
    }
    


});
function desktopControl() {
    
    $(document).on({
        keydown: function (e) {
            if (e.key === 'a' || e.key === 'd') {
                if ($TicToc==null && !$gameComplete) {
                    startGame();
                    console.log($TicToc);
                }
                else if ($gameComplete) {
                    $(document).off();
                }
            }
            if (e.key === "a") {
                $('#shipLeft').show();
                inertia += 1 * inertiaCoEf;
                thrustFlag = true;
            }
            else if (e.key === "d") {
                $('#shipRight').show();
                inertia -= 1 * inertiaCoEf;
                thrustFlag = true;
            }
            
        },
        keyup: function (e) {
            if (e.key === "a") {
                $('#shipLeft').hide();
                thrustFlag = false;
            }
            else if (e.key === "d") {
                $('#shipRight').hide();
                thrustFlag = false;
            }
            /*else if (e.key === "a" && e.key === "d") {
                $('#shipfull').toggle();
                momentum(10);
            }*/
        }
    })
}

    function SelfTest() {
        var x = 0;
        var testing = setInterval(function () {
            if (x < $masterNameArr.length) {
                console.log($masterNameArr[x]);
                $masterGen.text($masterNameArr[x].name);
                $('#sysCont').css({
                    'background-color': $masterNameArr[x].color[0],
                    'color': $masterNameArr[x].color[1],
                    'border': `3px solid ${$masterNameArr[x].color[1]}`
                });
            
                $.each($masterNameArr[x].string, function (index, item) {
                    setTimeout(function () {
                        console.log(item + " " + index * 250);
                        $master.text(item);
                    }, 300 * index);
                })
            
            }
    
            x++;
            if (x > 9) {
                console.log("testing ended");
                clearInterval(testing);
                x = 0;
            }
        
        
            console.log(x);
            $time.html(`${x}${x}:${x}${x}`);
        
        }, 500);
        var count = 0;
        const lInd = $('#left');
        const rInd = $('#right');
        const altBox = $('#NumAlt');
    
        var TempIndFLow = setInterval(function () {
        
        
            let pos = $('#left').offset().top;
        
            let y = 5 * count;
            altBox.css('transform', `translateY(${y}px)`);
            altBox.text(Math.floor($(window).height() - altBox.offset().top));
            lInd.css('transform', `translateY(-${y}px)`);
            rInd.css('transform', `translateY(-${y}px)`);
            if (lInd.offset().top < $(window).height() / 2) {
                $('#rightHud').css({
                    'background-color': 'var(--effect)',
                    'color': 'var(--bg)'
                });
            }
            if (lInd.offset().top < $(window).height() / 4) {
                $('#rightHud').css({
                    'background-color': 'var(--hudWarn)',
                    'color': 'var(--bg)'
                });
            }
            if (pos < ($(window).height() / 5)) {
                console.log(pos);
                lInd.css('transform', `translateY()`);
                rInd.css('transform', `translateY()`);
                $('#rightHud').css({
                    'background-color': '',
                    'color': ''
                });
                altBox.css('transform', `translateY()`);
                altBox.text(Math.floor($(window).height() - altBox.offset().top));
                clearInterval(TempIndFLow);
            }
        
            count++;
        }, 50);
        $('#shipfull').toggle();
        $('#shipLeft').toggle();
        $('#shipRight').toggle();
        $('#terra').toggle();
};

//Start Game heartbeat and routine behaviours

function startGame() {
    var heartbeat = setInterval(function () {
        $TicToc = !$TicToc;
        console.log("beat");
    }, 20);
    var rotation = setInterval(function () {
        
        if ($TicToc == true) {
                angle += 1 * (inertia/10);  
        }
        $('.ships').css({
            'position': 'absolute',
            'transform': `scale(.25) rotate(${angle}deg)`
        });
    }, 20);
    var thrustInt = setInterval(function () {
        if (thrustFlag) {
            heatRise += 1 * heatMult;
        }
        else if (heatRise != 0) {
            heatRise -= 
        }
    }, 20);
}

