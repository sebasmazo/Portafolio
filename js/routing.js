

function moveto(id) {
    switch (id) {
        case 1:
            window.scrollTo(0,800)
            break;
        case 2:
            window.scrollTo(0,1100)
            break;
        case 3:
            window.scrollTo(0,1800)
            break;
        case 4:
            window.scrollTo(0, 2600)
            break;
        default:
            window.scrollTo(0, 600)
            break;
    }
}