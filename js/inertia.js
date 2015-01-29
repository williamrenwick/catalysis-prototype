$(function() {
    var $d = $("#draggable");

    var x1, x2,
        y1, y2,
        t1, t2;  // Time

    var minDistance = 40; // Minimum px distance object must be dragged to enable momentum.

    var onMouseMove = function(e) {
        var mouseEvents = $d.data("mouseEvents");
        if (e.timeStamp - mouseEvents[mouseEvents.length-1].timeStamp > 40) {
            mouseEvents.push(e);
            if (mouseEvents.length > 2) {
                mouseEvents.shift();
            }
        }
    }

    var onMouseUp = function() {
        $(document).unbind("mousemove mouseup");
    }

    $d.draggable({
        start: function(e, ui) {
            $d.data("mouseEvents", [e]);
            $(document)
                .mousemove(onMouseMove)
                .mouseup(onMouseUp);
        },
        stop: function(e, ui) {
            $d.stop();
            $d.css("text-indent", 100);

            var lastE = $d.data("mouseEvents").shift();

            x1 = lastE.pageX;
            y1 = lastE.pageY;
            t1 = lastE.timeStamp;
            x2 = e.pageX;
            y2 = e.pageY;
            t2 = e.timeStamp;

            // Deltas
            var dX = x2 - x1,
                dY = y2 - y1,
                dMs = Math.max(t2 - t1, 1);

            // Speeds
            var speedX = Math.max(Math.min(dX/dMs, 1), -1),
                speedY = Math.max(Math.min(dY/dMs, 1), -1);

            // Distance moved (Euclidean distance)
            var distance = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));

            if (distance > minDistance) {
                // Momentum
                var lastStepTime = new Date();
                $d.animate({ textIndent: 0 }, {
                    duration: Math.max(Math.abs(speedX), Math.abs(speedY)) * 2000,
                    step: function(currentStep){
                        speedX *= (currentStep / 100);
                        speedY *= (currentStep / 100);

                        var now = new Date();
                        var stepDuration = now.getTime() - lastStepTime.getTime();

                        lastStepTime = now;

                        var position = $d.position();

                        var newLeft = (position.left + (speedX * stepDuration / 4)),
                            newTop = (position.top + (speedY * stepDuration / 4));

                        $d.css({
                            left: newLeft+"px",
                            top: newTop+"px"
                        });
                    }
                });
            }
        }
    });
});