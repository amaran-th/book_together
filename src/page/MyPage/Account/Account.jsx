//개인정보 수정
import React from 'react'
import ReactDOM from 'react-dom'

function Account() {
  return (
    <div className="min-h-[80vh] space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden dark:border dark:border-gray-700">
          <div className="py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium">계정 정보</h3>
              <p className="mt-1 text-sm text-gray-500">
                계정 정보를 수정할 수 있습니다.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 space-y-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium">
                  아이디(친구코드로 사용됩니다)
                  <div className="inline-block rounded-lg bg-gray-100 pl-1 pr-2 mx-2 text-sm text-main dark:bg-gray-700">
                    <input
                      type="checkbox"
                      disabled
                      className="h-3 w-3 mr-1 mb-1 text-main border-sub rounded focus:ring-main dark:bg-black"
                    />
                    중복확인
                  </div>
                </label>
                <div className="mt-1 ">
                  <input
                    type="text"
                    required
                    className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label className="block text-sm font-medium">이메일 주소</label>
                <div className="mt-1 sm:flex">
                  <input
                    type="email"
                    required
                    className="appearance-none w-full sm:mb-0 mb-3 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                  <button
                    type="button"
                    className="sm:ml-3 sm:w-[12em] w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sub hover:bg-main hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
                  >
                    인증번호 전송
                  </button>
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium">비밀번호</label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">
                  비밀번호 확인
                  <input
                    type="checkbox"
                    disabled
                    className="h-4 w-4 mx-1 mb-1 text-main border-gray-300 rounded focus:ring-main dark:bg-black"
                  />
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main focus:border-main sm:text-sm dark:bg-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4 py-3 bg-gray-50 sm:px-6 dark:bg-gray-900">
            <button className="border border-gray-500 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-red-500 hover:bg-gray-50 hover:shadow-md focus:outline-none dark:hover:bg-gray-700">
              회원 탈퇴하기
            </button>
            <button
              type="submit"
              className="bg-main border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-point hover:shadow-md focus:outline-none"
            >
              변경 적용하기
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Account
