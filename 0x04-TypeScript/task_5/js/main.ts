// Interfaces with brand properties for nominal typing
interface MajorCredits {
    credits: number;
    _brand: 'Major';
}

interface MinorCredits {
    credits: number;
    _brand: 'Minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'Major'
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'Minor'
    };
}

// Example usage
const major1: MajorCredits = { credits: 3, _brand: 'Major' };
const major2: MajorCredits = { credits: 4, _brand: 'Major' };

const minor1: MinorCredits = { credits: 2, _brand: 'Minor' };
const minor2: MinorCredits = { credits: 1, _brand: 'Minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, _brand: 'Major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, _brand: 'Minor' }