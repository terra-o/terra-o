import Page from '@/components/layout/Page'
import ExternalResource from '@/components/ExternalResource'

export default function QuickStart() {
  return (
    <Page className="dark:bg-terra-o-black bg-terra-o-white min-h-screen">
      <section className="flex items-center justify-center">
        <div className="w-5/6 flex flex-col items-start">
          <div>
            <h2 className="text-2xl lg:text-4xl 2xl:text-6xl text-terra-o-black dark:text-terra-o-white">
              Start your learning journey in <br /> Earth Observations - EO
            </h2>
          </div>
          <section>
            <p>Recommended Courses </p>
            <div className="flex items-center justify-center">
              <ExternalResource
                title={
                  'ARSET - Accessing and Analyzing Air Quality Data from Geostationary Satellites'
                }
                link={
                  'https://appliedsciences.nasa.gov/join-mission/training/english/arset-accessing-and-analyzing-air-quality-data-geostationary'
                }
                imageUrl={
                  'https://appliedsciences.nasa.gov//sites/default/files/styles/banner_min_height/public/2022-07/Website_Header_Small_0.png?itok=lWqrXuuT'
                }
              />
            </div>
          </section>
        </div>
      </section>
    </Page>
  )
}
