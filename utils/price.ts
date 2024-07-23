export function calculateImagePrice(prevUploads: number, numOfDoc: number): number | undefined {
    // total = 50;

    switch (prevUploads) {
        case 0:
            switch (numOfDoc) {
                case 1:
                    return 25;
                case 2:
                    return 40;
                case 3:
                    return 50;
                default:
                    break;
            }

        case 1:
            switch (numOfDoc) {
                case 1:
                    return 15;
                case 2:
                    return 25;
                default:
                    break;
            }

        case 2:
            switch (numOfDoc) {
                case 1:
                    return 10;
                default:
                    break;
            }

        default:
            break;
    }
}

export function calculateReelPrice(prevUploads: number, numOfDoc: number): number | undefined {
    // total = 60;

    switch (prevUploads) {
        case 0:
            switch (numOfDoc) {
                case 1:
                    return 40;
                case 2:
                    return 60;
                default:
                    break;
            }

        case 1:
            switch (numOfDoc) {
                case 1:
                    return 20;
                default:
                    break;
            }

        default:
            break;
    }
}