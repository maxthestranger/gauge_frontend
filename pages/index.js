import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5>Card title</h5>
            </div>
            <div className="card-body">
              <div className="">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  class="form-control is-invalid"
                  placeholder="Your email"
                />
                <span className="mt-2 invalid-feedback">
                  There's something wrong!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
