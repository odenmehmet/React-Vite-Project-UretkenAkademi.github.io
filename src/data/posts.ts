export type Project = {
  slug: string
  title: string
  description: string
  image: string
  link: string
}

export const projects: Project[] = [
  {
    slug: 'calculator',
    title: 'Calculator',
    description:
      'My first week homework as part of REACT.JS training.',
    image:
      'calculator.png',
    link: 'https://github.com/odenmehmet/Uretkenakademi'
  },
  {
    slug: 'Sudoku',
    title: 'Sudoku',
    description:
      'My second week homework as part of REACT.JS training.',
    image:
      'sudoku.png',
    link: 'https://github.com/odenmehmet/SUDOKU'
  },
  {
    slug: 'Random-PhotoGallery',
    title: 'Random Photo Gallery',
    description:
      'My third week homework as part of REACT.JS training.',
    image:
      'imagegallery.png',
    link: 'https://odenmehmet.github.io/RandomImageGallery.github.io/'
  },
  {
    slug: 'Bootstrapwebpagess',
    title: 'My First Bootstrap Website',
    description:
      'My fourth week homework as part of REACT.JS training.',
    image:
      'Bootstrapwebpagess.png',
    link: 'https://odenmehmet.github.io/bootstrap.github.io/'
  },
]
