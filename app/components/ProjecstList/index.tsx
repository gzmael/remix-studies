import { Menu } from "@headlessui/react";
import { ChevronDownIcon, SortAscendingIcon } from "@heroicons/react/outline";
import type { Types } from "~/features/github";
import { Repositories } from "~/features/github";
import { classNames } from "~/util";

interface ProjectsListProps {
  repos: Types.Repositories.Repo[];
  user: Types.User;
}

export default function ProjectsList({ repos, user }: ProjectsListProps) {
  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
      <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex items-center">
          <h1 className="flex-1 text-lg font-medium">{repos.length} Projects</h1>
          
          <Menu as="div" className="relative">
            <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <SortAscendingIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Sort
              <ChevronDownIcon
                className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Name
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Date modified
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Date created
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

        </div>
      </div>

      <Repositories repos={repos} user={user} />
    </div>
  )
}