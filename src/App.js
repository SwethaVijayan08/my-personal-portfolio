import './App.css';

function App() {
  return (
    <div className="App">
      <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-5">
		<nav class="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
			aria-label="Global">
			<div class="md:col-span-3">
				<a class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
					href="../templates/creative-agency/index.html" aria-label="Preline">
				</a>
			</div>


			<div id="navbar-collapse-with-animation"
				class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
				<div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
					<div>
						<a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
							href="port.html" aria-current="page">Home</a>
					</div>
					<div>
						<a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
							href="skills.html">Skills</a>
					</div>
					<div>
						<a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
							href="proj.html">Projects History</a>
					</div>
					<div>
						<a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
							href="about.html">About me</a>
					</div>
					<div>
						<a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
							href="achis.html">Achievements</a>
					</div>
                    <div>
						<a class="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
							href="contact.html">Contact Us</a>
					</div>
				</div>
			</div>
		</nav>
	</header>
  <div class="container">
		<div class="box">
			<h1><b>Swetha vijayan</b></h1>
            <p>
                Welcome to my Personal Portfolio!!
            </p>
            <img src="./img.jpg" alt="Your Name"/>
            <p>Here you can learn more about my skills, projects, and professional journey.</p>
        </div>
	</div>
    </div>
  );
}

export default App;
