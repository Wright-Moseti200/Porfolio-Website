import { Timeline } from '@/components/ui/timeline';
import { Reveal } from '../components/motion/Reveal';

const Services = () => {
  const data = [
    {
      title: '2026',
      content: (
        <Reveal animation="fade-up" className="h-full">
          <div className="border p-3 md:p-5 border-black rounded-sm">
            <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0">
              <div>
                <h1 className="text-lg md:text-xl font-bold">IT attache</h1>
                <p className="text-base md:text-lg">Kenya Revenue Authority</p>
              </div>
              <div>
                <div className="bg-black text-white text-center p-2 rounded-full text-sm md:text-base whitespace-nowrap">
                  January - March
                </div>
              </div>
            </div>
            <ul className="mt-2 text-black text-sm md:text-base list-disc list-inside space-y-2">
              <li>
                Support high-availability digital revenue infrastructure serving Kenya&apos;s tax
                collection system
              </li>
              <li>
                Provide end-user technical support and troubleshoot critical hardware/software
                issues for government operations
              </li>
              <li>
                Assist in maintaining cybersecurity protocols and system integrity for sensitive
                financial data.
              </li>
              <li>
                Collaborate with cross-functional teams to ensure optimal performance of enterprise
                IT systems.
              </li>
              <li>
                Gain hands-on experience with cloud-based government services and digital
                infrastructure management
              </li>
            </ul>
          </div>
        </Reveal>
      ),
    },
  ];

  return (
    <div className="mt-14 px-4 lg:px-0" id="work">
      <Reveal animation="fade-down">
        <h1 className="text-center text-4xl lg:text-5xl font-semibold">Work experience</h1>
      </Reveal>
      <Timeline data={data} />
    </div>
  );
};

export default Services;
