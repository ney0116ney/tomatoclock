$(document).ready(function () {
    let timer = null; // 設置初始值為 null
    let seconds = 25 * 60; // 預設 25 分鐘

    // 格式化時間顯示
    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // 計時功能
    function tik() {
        if (timer !== null) return; // 如果計時器已啟動，直接返回
        timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                $("#timer").text(formatTime(seconds));
            } else {
                clearInterval(timer);
                timer = null; // 重置計時器狀態
                alert("時間到！");
            }
        }, 1000);
    }

    // 停止計時的功能
    function stopTimer() {
        if (timer !== null) {
            clearInterval(timer); // 清除計時器
            timer = null; // 重置計時器狀態
        }
    }

    // 重置計時器時間為指定的時間（專注時間、短休息或長休息）
    function resetTimer(minutes) {
        seconds = minutes * 60; // 設置為指定的分鐘數
        $("#timer").text(formatTime(seconds)); // 更新顯示
    }

    // 綁定按鈕點擊事件
    $("#start-button").on("click", function() {
        tik(); // 開始計時
    });

    $("#pause-button").on("click", function() {
        stopTimer(); // 暫停計時
    });

    $("#reset-button").on("click", function() {
        //查詢class tab 看哪一個data-active
        
        stopTimer(); // 停止計時
        resetTimer(25); // 重置為 25 分鐘
    });

    // 按鈕事件：點擊專注時間（25 分鐘）
    $("#focus-tab").on("click", function() {
        $(".tab").attr("data-active", false);
        $("#focus-tab").attr("data-active", true);

        stopTimer(); // 停止當前計時
        resetTimer(25); // 重置為 25 分鐘
    });

    // 按鈕事件：點擊短休息（5 分鐘）
    $("#short-break-tab").on("click", function() {
        $(".tab").attr("data-active", false);
        $("#focus-tab").attr("data-active", true);
        stopTimer(); // 停止當前計時
        resetTimer(5); // 重置為 5 分鐘
    });

    // 按鈕事件：點擊長休息（15 分鐘）
    $("#long-break-tab").on("click", function() {
        $(".tab").attr("data-active", false);
        $("#focus-tab").attr("data-active", true);
        stopTimer(); // 停止當前計時
        resetTimer(15); // 重置為 15 分鐘
    });
});
