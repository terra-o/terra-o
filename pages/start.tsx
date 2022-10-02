import Page from '@/components/layout/Page'
import ExternalResource from '@/components/resources/ExternalResource'

export default function Start() {
  const resources = [
    {
      title:
        'ARSET - Accessing and Analyzing Air Quality Data from Geostationary Satellites',
      url: 'https://appliedsciences.nasa.gov/join-mission/training/english/arset-accessing-and-analyzing-air-quality-data-geostationary',
      image:
        'https://appliedsciences.nasa.gov//sites/default/files/styles/banner_min_height/public/2022-07/Website_Header_Small_0.png?itok=lWqrXuuT'
    },
    {
      title: 'ARSET - Disaster Assessment Using Synthetic Aperture Radar',
      url: 'https://appliedsciences.nasa.gov/join-mission/training/english/arset-disaster-assessment-using-synthetic-aperture-radar',
      image:
        'https://appliedsciences.nasa.gov//sites/default/files/styles/banner_min_height/public/2022-07/Website_Header_Small_0.png?itok=lWqrXuuT'
    }
  ]

  return (
    <Page
      title="Start"
      className="dark:bg-terra-o-black bg-terra-o-white min-h-screen"
    >
      <section className="flex flex-col items-center text-terra-o-black dark:text-terra-o-white">
        <div className="my-28 flex flex-col justify-center items-center gap-y-10">
          <h2 className="text-center font-sans font-semibold text-2xl lg:text-5xl 2xl:text-6xl ">
            Start your learning journey in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-50 to-terra-o-green-300 ">
              Earth Observations
            </span>{' '}
            - EO
          </h2>
          <p className="text-terra-o-white dark:text-terra-o-gray-300 w-2/3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            magna urna facilisi lacus. Sodales sed elementum nunc sit viverra
            diam est.
          </p>
        </div>
        <article className="flex mx-6 items-start justify-center flex-col">
          <p>Recommended Courses </p>

          <div className="flex items-center justify-center sm:flex-row flex-col gap-2">
            {resources.map(({ title, url, image }) => (
              <ExternalResource
                key={title}
                title={title}
                url={url}
                image={image}
              />
            ))}
          </div>
        </article>
      </section>
    </Page>
  )
}
