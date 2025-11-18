import FlowingMenu from "@/components/molecules/FlowingProjects";

const projects = [
  { link: 'https://newgenre.studio/', text: 'New Genre', image: '/new-genre-case.jpg', date: '2025', service: 'Web Development' },
  { link: '#', text: 'Portfolio', image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070', date: '2025', service: 'Web Development' },
  { link: 'https://jazatland.com/', text: 'J.A Zatland', image: 'https://framerusercontent.com/images/zVwj3Uu0eKibBdnZ0S1hdaAEBGM.jpg?scale-down-to=512&width=1062&height=1062', date: '2025', service: 'Web Development' },
  { link: 'https://narratives.work/', text: 'Narratives Work', image: '/narratives-case.jpg', date: '2025', service: 'Web Development' }
];

const Projects = () => {
    return ( 
        <section className="relative px-8 py-32 bg-background">
            <FlowingMenu items={projects} />
        </section>
     );
}

export default Projects;