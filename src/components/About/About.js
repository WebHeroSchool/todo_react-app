import React from 'react';
import { Octokit } from '@octokit/rest';
import LinearProgress from '@mui/material/LinearProgress';

import classNames from 'classnames';
import styles from '../About/About.module.css';
import arrow from '../About/arrow.png';


const octokit = new Octokit();

class  About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    infoAboutUser: [],
    isError: false,
    errorMessage: '',
    firstRepo: 0,
    lastRepo: 4
  } 

  prevPage = () => {
    this.setState({
        firstRepo: this.state.firstRepo - 4,
        lastRepo: this.state.lastRepo - 4
    });
  };

  nextPage = () => {
    this.setState({
        firstRepo: this.state.firstRepo + 4,
        lastRepo: this.state.lastRepo + 4
    });
  };


  componentDidMount() {
    octokit.repos.listForUser({
      username: 'aartemenko0',    
    }).then(({ data}) => {
      this.setState({
        repoList: data,
        isLoading: false,
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error
        })
      })

    octokit.users.getByUsername({
      username: 'aartemenko0',
    }).then(({data}) => {
      this.setState({
        infoUser: data
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error
        })
      })
  }

  render() {
    const { isLoading, repoList, infoUser, errorMessage, isError, firstRepo, lastRepo } = this.state;
    const repoListPage = repoList.slice(firstRepo, lastRepo);

    return (
        <div>
          {isLoading ?
            <div> <LinearProgress color="secondary" /> <LinearProgress color="secondary" /> </div>
           :
            <div>
              {isError ?
                'Oops! Something went wrong: ' + errorMessage
               :
                <div>
                  <div className={styles.About}>
                    {infoUser === undefined ?
                      'Information not found'
                     :
                      <img
                        src={infoUser.avatar_url}
                        alt="Avatar"
                        className={styles.Avatar}
                      />
                    }
                    <div className={styles.AboutInfo}>
                      <div className={styles.AboutInfo__box}>
                        <h2 className={styles.title}>
                          {infoUser === undefined ? ' Information not found' : infoUser.name}
                        </h2>
                        <p className={styles.subTitle}>
                          {infoUser === undefined ? ' Information not found' : infoUser.bio}
                        </p>
                        <div className={styles.Contacts}>
                          <a className={styles.ContactsMail} target="_blank" rel = "noreferrer" href="aartemenko9506@gmail.com">aartemenkoo9506@gmail.com</a>
                          <a className={styles.ContactsTel} target="_blank" rel = "noreferrer" href="https://t.me/alia172">t.me/alia172</a>
                        </div>
                      </div>
                      <div className={styles.iconsBox}>
                        <div className={styles.icons}>
                          <a className={styles.github} target="_blank" rel = "noreferrer" href="https://github.com/aartemenko0"> </a>
                          <a className={styles.linkedin} target="_blank" rel = "noreferrer" href="https://www.linkedin.com/in/alinaartemenko"> </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.content}>
                    <div>
                      <div className={styles.repoHeader}>
                        <h3>My repositories on github.com:</h3>
                        <div className={styles.arrows}>
                          <button onClick={this.prevPage} disabled={firstRepo < 4}>
                              <img className={styles.arrow__left} src={arrow} alt='scroll-left'/>
                          </button>
                          <button onClick={this.nextPage} disabled={repoList.length <= lastRepo}>
                            <img className={styles.arrow__right} src={arrow} alt='scroll-right'/>
                          </button>
                         </div>
                      </div>
                      <ol className={styles.repo}>
                        {repoList === undefined
                          ? 'Information not found'
                          : repoListPage.map((repo) => (
                            <li className={styles.repoList} key={repo.id}>
                              <a className={styles.repoLinks} target="_blank" rel = "noreferrer" href={repo.html_url}>
                                <span className={styles.repoName}>{repo.name}</span>
                                <span>
                                  {repo.description}
                                </span>
                                <div className={styles.repo__info}>
                                  <span className={
                                    repo.language === null
                                    ? repo.language = 'CSS'
                                      :
                                    classNames({
                                      [styles.language]: true,
                                      [styles.html]: repo.language === 'HTML',
                                      [styles.css]: repo.language === 'CSS',
                                      [styles.js]: repo.language === 'JavaScript',
                                    })}>
                                  {repo.language}
                                  </span>
                                  <span
                                    className={styles.star}>{repo.stargazers_count}</span>
                                  <span
                                    className={styles.fork}>{repo.forks_count}</span>
                                  <span> Updated on {new Date(repo.updated_at).toLocaleString('en-US', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                  })}</span>
                                </div>
                              </a>
                              <a className={styles.repoHold}
                                target="_blank" rel = "noreferrer"
                                href={repo.name === 'todo_react-app' ? `https://todo-solomon-three.vercel.app/` : `https://aartemenko0.github.io/${repo.name}`}>
                                хостинг</a>
                            </li>
                          ))}
                      </ol>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      );
    }
}

export default About;