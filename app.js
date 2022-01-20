    var numeric = new ej.inputs.NumericTextBox({
        min: 0,
        max: 5,
        value: 3,
        step: 1,
        placeholder: 'Pick the current position',
        floatLabelType: 'Always',
        width: '150px',
        change: positionChange,
        format: '#',
    });
    numeric.appendTo('#numeric');
    var FinishedPointer = './resources/FinishedTick.png';
    var CurrentActionPointer = './resources/CurrentAction.png';
    var UnFinishedPointer = './resources/UnfinishedTick.png';
    var FinishedColor = '#f2a92f';
    var UnFinishedColor = '#eeeeee';
    var CurrentActionColor = '#79564e';
    var Stage1 = './resources/1baloon.png';
    var Stage2 = './resources/2baloon.png';
    var Stage3 = './resources/3baloon.png';
    var Stage4 = './resources/4baloon.png';
    var gauge = new ej.lineargauge.LinearGauge({
        height: '200px',
        title: 'Stage Progression',
        orientation: 'Horizontal',
        axes: [
            {
                maximum: 150,
                minimum: 0,
                line: { width: 0, color: 'transparent' },
                majorTicks: { interval: 50, width: 0, color: 'transparent' },
                minorTicks: { width: 0, color: 'transparent' },
                labelStyle: { offset: 70 },
                pointers: [
                    { type: 'Marker', value: 0, offset: -5, markerType: 'Image', imageUrl: FinishedPointer, height: 30, width: 30 },
                    { type: 'Marker', value: 50, offset: -5, markerType: 'Image', imageUrl: FinishedPointer, height: 30, width: 30 },
                    { type: 'Marker', value: 100, offset: -5, markerType: 'Image', imageUrl: CurrentActionPointer, height: 30, width: 30 },
                    { type: 'Marker', value: 150, offset: -5, markerType: 'Image', imageUrl: UnFinishedPointer, height: 30, width: 30 },
                ],
                ranges: [
                    { start: 3, end: 47, startWidth: 8, endWidth: 8, color: FinishedColor },
                    { start: 53, end: 97, startWidth: 8, endWidth: 8, color: FinishedColor },
                    { start: 103, end: 147, startWidth: 8, endWidth: 8, color: UnFinishedColor },
                ],
            },
            {
                minimum: 200,
                maximum: 350,
                line: { color: 'transparent' },
                majorTicks: { interval: 50, width: 0, color: 'transparent' },
                minorTicks: { width: 0, color: 'transparent' },
                pointers: [
                    { type: 'Marker', value: 200, markerType: 'Image', imageUrl: Stage1, height: 50, width: 50, offset: -10 },
                    { type: 'Marker', value: 250, markerType: 'Image', imageUrl: Stage2, height: 50, width: 50, offset: -10 },
                    { type: 'Marker', value: 300, markerType: 'Image', imageUrl: Stage3, height: 50, width: 50, offset: -10 },
                    { type: 'Marker', value: 350, markerType: 'Image', imageUrl: Stage4, height: 50, width: 50, offset: -10 },
                ],
            },
        ],
        axisLabelRender: axisLabelRender,
    });
    gauge.appendTo('#linear1');
    var gauge2 = new ej.lineargauge.LinearGauge({
        title: 'Stage Progression',
        height: '200px',
        orientation: 'Horizontal',
        axes: [
            {
                maximum: 150,
                minimum: 0,
                line: { width: 0, color: 'transparent' },
                majorTicks: { interval: 50, width: 0, color: 'transparent' },
                minorTicks: { width: 0, color: 'transparent' },
                labelStyle: { offset: 70 },
                pointers: [
                    { type: 'Marker', value: 0, markerType: 'Image', imageUrl: Stage1, height: 30, width: 30 },
                    { type: 'Marker', value: 50, markerType: 'Image', imageUrl: Stage2, height: 30, width: 30 },
                    { type: 'Marker', value: 100, markerType: 'Image', imageUrl: Stage3, height: 30, width: 30 },
                    { type: 'Marker', value: 150, markerType: 'Image', imageUrl: Stage4, height: 30, width: 30 },
                ],
                ranges: [
                    { start: 0, end: 50, startWidth: 8, endWidth: 8, color: FinishedColor },
                    { start: 50, end: 100, startWidth: 8, endWidth: 8, color: FinishedColor },
                    { start: 100, end: 150, startWidth: 8, endWidth: 8, color: UnFinishedColor },
                ],
            },
        ],
        axisLabelRender: axisLabelRender,
    });
    gauge2.appendTo('#linear2');
    var gauge3 = new ej.lineargauge.LinearGauge({
        title: 'Stage Progression',
        height: '200px',
        orientation: 'Horizontal',
        axes: [
            {
                maximum: 150,
                minimum: 0,
                line: { width: 0, color: 'transparent' },
                majorTicks: { interval: 50, width: 0, color: 'transparent' },
                minorTicks: { width: 0, color: 'transparent' },
                labelStyle: { offset: 70 },
                pointers: [
                    { type: 'Marker', value: 0, offset: -19, markerType: 'Circle', color: FinishedColor, height: 30, width: 30 },
                    { type: 'Marker', value: 50, offset: -19, markerType: 'Circle', color: FinishedColor, height: 30, width: 30 },
                    { type: 'Marker', value: 150, offset: -19, markerType: 'Circle', color: UnFinishedColor, height: 30, width: 30 },
                ],
                ranges: [
                    { start: 3, end: 47, startWidth: 8, endWidth: 8, color: FinishedColor },
                    { start: 53, end: 100, startWidth: 8, endWidth: 8, color: FinishedColor },
                    { start: 100, end: 147, startWidth: 8, endWidth: 8, color: UnFinishedColor },
                ],
            },
        ],
        axisLabelRender: axisLabelRender,
    });
    gauge3.appendTo('#linear3');
    function axisLabelRender(args) {
        if (args.value == 0) {
            args.text = 'Stage 1';
        }
        else if (args.value == 50) {
            args.text = 'Stage 2';
        }
        else if (args.value == 100) {
            args.text = 'Stage 3';
        }
        else if (args.value == 150) {
            args.text = 'Stage 4';
        }
        else {
            args.cancel = true;
        }
    }
    function positionChange(args) {
        switch (args.value) {
            case 0:
                updatePointerImage(UnFinishedPointer, UnFinishedPointer, UnFinishedPointer, UnFinishedPointer);
                updatePointerColor(UnFinishedColor, UnFinishedColor, UnFinishedColor, UnFinishedColor);
                updateRangeColor(UnFinishedColor, UnFinishedColor, UnFinishedColor);
                break;
            case 1:
                updatePointerImage(CurrentActionPointer, UnFinishedPointer, UnFinishedPointer, UnFinishedPointer);
                updatePointerColor(CurrentActionColor, UnFinishedColor, UnFinishedColor, UnFinishedColor);
                updateRangeColor(UnFinishedColor, UnFinishedColor, UnFinishedColor);
                break;
            case 2:
                updatePointerImage(FinishedPointer, CurrentActionPointer, UnFinishedPointer, UnFinishedPointer);
                updatePointerColor(FinishedColor, CurrentActionColor, UnFinishedColor, UnFinishedColor);
                updateRangeColor(FinishedColor, UnFinishedColor, UnFinishedColor);
                break;
            case 3:
                updatePointerImage(FinishedPointer, FinishedPointer, CurrentActionPointer, UnFinishedPointer);
                updatePointerColor(FinishedColor, FinishedColor, CurrentActionColor, UnFinishedColor);
                updateRangeColor(FinishedColor, FinishedColor, UnFinishedColor);
                break;
            case 4:
                updatePointerImage(FinishedPointer, FinishedPointer, FinishedPointer, CurrentActionPointer);
                updatePointerColor(FinishedColor, FinishedColor, FinishedColor, CurrentActionColor);
                updateRangeColor(FinishedColor, FinishedColor, FinishedColor);
                break;
            case 5:
                updatePointerImage(FinishedPointer, FinishedPointer, FinishedPointer, FinishedPointer);
                updatePointerColor(FinishedColor, FinishedColor, FinishedColor, FinishedColor);
                updateRangeColor(FinishedColor, FinishedColor, FinishedColor);
                break;
            default:
                break;
        }
    }
    function updatePointerImage(img1, img2, img3, img4) {
        gauge.axes[0].pointers[0].imageUrl = img1;
        gauge.axes[0].pointers[1].imageUrl = img2;
        gauge.axes[0].pointers[2].imageUrl = img3;
        gauge.axes[0].pointers[3].imageUrl = img4;
    }
    function updatePointerColor(color1, color2, color3, color4) {
        gauge3.axes[0].pointers[0].color = color1;
        gauge3.axes[0].pointers[1].color = color2;
        gauge3.axes[0].pointers[2].color = color4;
    }
    function updateRangeColor(color1, color2, color3) {
        gauge.axes[0].ranges[0].color = color1;
        gauge.axes[0].ranges[1].color = color2;
        gauge.axes[0].ranges[2].color = color3;
        gauge2.axes[0].ranges[0].color = color1;
        gauge2.axes[0].ranges[1].color = color2;
        gauge2.axes[0].ranges[2].color = color3;
        gauge3.axes[0].ranges[0].color = color1;
        gauge3.axes[0].ranges[1].color = color2;
        gauge3.axes[0].ranges[2].color = color3;
    }
