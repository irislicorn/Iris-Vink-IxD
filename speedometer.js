function draw(iSpeed)
{
    /* Main entry point for drawing the speedometer
    * If canvas is not support alert the user.
    */
 
    var canvas = document.getElementById('tutorial');
 
    // Canvas good?
    if (canvas != null && canvas.getContext)
    {
        var options = buildOptionsAsJSON(canvas, iSpeed);
 
        // Clear canvas
        clearCanvas(options);
 
        // Draw the metallic styled edge
        drawMetallicArc(options);
 
        // Draw thw background
        drawBackground(options);
 
        // Draw tick marks
        drawTicks(options);
 
        // Draw labels on markers
        drawTextMarkers(options);
 
        // Draw speeometer colour arc
        drawSpeedometerColourArc(options);
 
        // Draw the needle and base
        drawNeedle(options);
 
    }
    else
    {
        alert("Canvas not supported by your browser!");
    }
}
function drawMetallicArc(options)
{
    /* Draw the metallic border of the speedometer
     * by drawing two semi-circles, one over lapping
     * the other with a bit of alpha transparency
     */
 
    drawOuterMetallicArc(options);
    drawInnerMetallicArc(options);
}

function drawOuterMetallicArc(options)
{
    /* Draw the metallic border of the speedometer
     * Outer grey area
     */
    options.ctx.beginPath();
 
    // Nice shade of grey
    options.ctx.fillStyle = "rgb(127,127,127)";
 
    // Draw the outer circle
    options.ctx.arc(options.center.X,
        options.center.Y,
        options.radius,
        0,
        Math.PI,
        true);
 
    // Fill the last object
    options.ctx.fill();
}
 
function drawInnerMetallicArc(options)
{
    /* Draw the metallic border of the speedometer
     * Inner white area
     */
 
    options.ctx.beginPath();
 
    // White
    options.ctx.fillStyle = "rgb(255,255,255)";
 
    // Outer circle (subtle edge in white->grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);
 
    options.ctx.fill();
}
function drawBackground(options)
{
    /* Black background with alphs transparency to
     * blend the edges of the metallic edge and
     * black background
     */
 
    options.ctx.globalAlpha = 0.2;
    options.ctx.fillStyle = "rgb(0,0,0)";
 
    // Draw semi-transparent circles
    for (var i = 170; i < 180 ; i++)
    {
        options.ctx.beginPath();
 
        options.ctx.arc(options.center.X,
            options.center.Y,
            1 * i, 0,
            Math.PI,
            true);
 
        options.ctx.fill();
    }
}