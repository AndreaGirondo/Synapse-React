import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import synapseImage from '../../assets/img/synapse.png'
import clemend from '../../assets/img/clemend.png'
import christian from '../../assets/img/christian.png'
import jean from '../../assets/img/jean.png'
import manil from '../../assets/img/manil.png'
import sean from '../../assets/img/sean.png'
import andrea from '../../assets/img/andrea.png'
import LoginForm from '../forms/LoginForm/LoginForm'
import RegisterForm from '../forms/RegisterForm/RegisterForm'

import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Objectif 2025', href: '#objectif2025' },
  { name: 'Valeur', href: '#nosvaleurs' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Contacter nous', href: '#contacternous' },
]
const stats = [
  { label: 'Lancement de Synapse', value: '2025' },
  { label: 'Client', value: '25' },
  { label: 'Abonné Instagram', value: '10k' },
  { label: 'Avis de nos client', value: '20/20' },
]
const values = [
  {
    name: 'Innovation.',
    description: 'Nous repoussons constamment les limites pour offrir des solutions nouvelles et efficaces aux étudiants.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Inclusion.',
    description: 'Synapse accueille et soutient tous les étudiants, indépendamment de leur origine, pour une intégration réussie.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Accessibilité.',
    description: 'Nous nous assurons que nos services sont facilement accessibles et utilisables par tous les étudiants.',
    icon: UserGroupIcon,
  },
  {
    name: 'Engagement.',
    description: 'Synapse est dédié à l\'amélioration continue des services pour répondre aux besoins évolutifs des étudiants.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Collaboration.',
    description: 'Nous croyons en la force du travail d\'équipe et de la collaboration avec des partenaires pour offrir des services complets.',
    icon: SparklesIcon,
  },
  {
    name: 'Excellence.',
    description: 'Synapse s\'engage à maintenir les plus hauts standards de qualité dans tous nos services et interactions.',
    icon: SunIcon,
  },
]
const team = [
  {
    name: 'Clemend',
    role: 'RES RS',
    imageUrl: clemend,
  },
  {
    name: 'Christian',
    role: 'UX / UI',
    imageUrl: christian,
  },
  {
    name: 'Manil',
    role: 'DA',
    imageUrl: manil,
  },
  {
    name: 'Jean',
    role: 'Marketing',
    imageUrl: jean,
  },
  {
    name: 'Sean',
    role: 'PMO',
    imageUrl: sean,
  },
  {
    name: 'Andréa',
    role: 'Développeur',
    imageUrl: andrea,
  }
]
const benefits = [
  'Competence des salariés',
  'Nos sommes a l\'écoute',
  'Satisfaction client',
  'Confiance et transparence',
  'Une équipe de choc',
  'Des services de qualité',
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analyse', href: '#' },
    { name: 'Commercial', href: '#' },
  ],
  support: [
    { name: 'Guides', href: '#' },
    { name: 'Numéro de service', href: '#' },
  ],
  company: [
    { name: 'Qui sommes-nous', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Nos travaux', href: '#' },
    { name: 'Partenaires', href: '#' },
  ],
  legal: [
    { name: 'Droit', href: '#' },
    { name: 'Vie Privé', href: '#' },
    { name: 'Termes', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Synapse</span>
              <img
                className="h-8 w-auto"
                src={synapseImage} 
                alt="Synapse"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-white">
            <LoginForm /> 
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={synapseImage} 
                  alt="Synapse"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Rejoindre la France ?</h2>
            <h4 className="mt-6 text-xl font-bold leading-8 text-gray-300">
              Votre lien vers une intégration réussie en France.
            </h4> 
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Synapse est une entreprise qui a pour objectif de faciliter l'intégration des étrangers en France.
                  Nous vous accompagnons dans vos démarches administratives, la recherche de logement, d'emploi et
                  l'apprentissage de la langue française. 
                </p>
                <p className="mt-8">
                  Afin que vous puissiez vous sentir chez vous en France, nous mettons à votre disposition des services
                  de qualité et des conseils personnalisés. Notre équipe est à votre écoute et vous accompagne tout au
                  long de votre séjour.
                </p>
              </div>
              <div>
                <p>
                  Nous sommes une équipe de professionnels passionnés par notre métier et nous mettons tout en œuvre
                  pour vous offrir une expérience unique et inoubliable.
                  Nos trategies sont basées sur la confiance, la transparence et la satisfaction de nos clients.
                </p>
                <p className="mt-8">
                  Les retour de nos clients sont unanimes, ils sont satisfaits de nos services et recommandent Synapse
                  à leur entourage. Nous sommes fiers de notre travail et nous nous engageons à vous offrir le meilleur
                  de nous-même.
                </p>
              </div>
            </div>
            

            <h2 id="objectif2025" className="mt-36 flex items-center justify-center text-4xl font-bold tracking-tight text-white sm:text-6xl">Objectif 2025</h2>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 lg:mt-16 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-6 sm:mt-8 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            alt=""
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="nosvaleurs" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nos Valeurs</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="equipe" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Notre Equipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Synapse est heureux de vous montré son équipe de professionnels passionnés par leur métier. Nous mettons
              tout en œuvre pour vous offrir une expérience unique et inoubliable.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="mt-2 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-300">{person.role}</p>
                  <p className="text-sm leading-6 text-gray-500">{person.location}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 id="contacternous" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Conctacte notre équipe</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Nous sommes en services 5 jours sur 7 pour répondre à vos questions et vous accompagner dans vos
                  démarches. N'hésitez pas à nous contacter pour plus d'informations.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
                    Découvrer l'équipe <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-32 sm:mt-40" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <img
                className="h-7"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Company name"
              />
              <p className="text-sm leading-6 text-gray-300">
                nos reseaux social pour suivre nos actualités et les offres de nos équipes.
              </p>
              <div className="flex space-x-6">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Notre travail</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">L'entreprise</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Mention légale</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400 text-center">&copy; 2024 Synapse. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
