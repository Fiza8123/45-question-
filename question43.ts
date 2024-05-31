function make_great(magicians: string[]): string[] {
    return magicians.map(name => `Great ${name}`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

const magicians = ['Merlin', 'Gandalf', 'Dumbledore'];
const greatMagicians = make_great([...magicians]);

show_magicians(magicians);
show_magicians(greatMagicians);